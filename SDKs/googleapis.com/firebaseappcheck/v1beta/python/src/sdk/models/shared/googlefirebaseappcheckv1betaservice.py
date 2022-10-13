from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum(str, Enum):
    OFF = "OFF"
    UNENFORCED = "UNENFORCED"
    ENFORCED = "ENFORCED"


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaService:
    enforcement_mode: Optional[GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcementMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
