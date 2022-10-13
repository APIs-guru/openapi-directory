from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HTTPSTriggerSecurityLevelEnum(str, Enum):
    SECURITY_LEVEL_UNSPECIFIED = "SECURITY_LEVEL_UNSPECIFIED"
    SECURE_ALWAYS = "SECURE_ALWAYS"
    SECURE_OPTIONAL = "SECURE_OPTIONAL"


@dataclass_json
@dataclass
class HTTPSTrigger:
    security_level: Optional[HTTPSTriggerSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityLevel' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
