from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum(str, Enum):
    OFF = "OFF"
    UNENFORCED = "UNENFORCED"
    ENFORCED = "ENFORCED"


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1Service:
    enforcement_mode: Optional[GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcementMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
