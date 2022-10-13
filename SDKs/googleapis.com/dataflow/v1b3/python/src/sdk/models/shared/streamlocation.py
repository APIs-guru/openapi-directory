from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customsourcelocation
from . import pubsublocation
from . import streamingsideinputlocation
from . import streamingstagelocation


@dataclass_json
@dataclass
class StreamLocation:
    custom_source_location: Optional[customsourcelocation.CustomSourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customSourceLocation' }})
    pubsub_location: Optional[pubsublocation.PubsubLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubLocation' }})
    side_input_location: Optional[streamingsideinputlocation.StreamingSideInputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sideInputLocation' }})
    streaming_stage_location: Optional[streamingstagelocation.StreamingStageLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingStageLocation' }})
    
