from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SMTPMsaSecurityModeEnum(str, Enum):
    SECURITY_MODE_UNSPECIFIED = "securityModeUnspecified"
    NONE = "none"
    SSL = "ssl"
    STARTTLS = "starttls"


@dataclass_json
@dataclass
class SMTPMsa:
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    security_mode: Optional[SMTPMsaSecurityModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityMode' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
