from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamLocation:
    r"""StreamLocation
    Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.
    """
    
    custom_source_location: Optional[CustomSourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSourceLocation') }})
    pubsub_location: Optional[PubsubLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubLocation') }})
    side_input_location: Optional[StreamingSideInputLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sideInputLocation') }})
    streaming_stage_location: Optional[StreamingStageLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingStageLocation') }})
    
