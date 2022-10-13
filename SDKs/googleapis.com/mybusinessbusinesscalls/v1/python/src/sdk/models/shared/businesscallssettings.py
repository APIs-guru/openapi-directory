from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BusinessCallsSettingsCallsStateEnum(str, Enum):
    CALLS_STATE_UNSPECIFIED = "CALLS_STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class BusinessCallsSettings:
    calls_state: Optional[BusinessCallsSettingsCallsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callsState' }})
    consent_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
