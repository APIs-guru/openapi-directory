from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SetMuteRequestMuteEnum(str, Enum):
    MUTE_UNSPECIFIED = "MUTE_UNSPECIFIED"
    MUTED = "MUTED"
    UNMUTED = "UNMUTED"
    UNDEFINED = "UNDEFINED"


@dataclass_json
@dataclass
class SetMuteRequest:
    mute: Optional[SetMuteRequestMuteEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mute' }})
    
