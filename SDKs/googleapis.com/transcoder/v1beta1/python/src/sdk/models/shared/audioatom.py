from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audiochannel


@dataclass_json
@dataclass
class AudioAtom:
    channels: Optional[List[audiochannel.AudioChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
