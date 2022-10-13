from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audiochannelinput


@dataclass_json
@dataclass
class AudioChannel:
    inputs: Optional[List[audiochannelinput.AudioChannelInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    
