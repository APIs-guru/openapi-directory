from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SMTPMsaSecurityModeEnum(str, Enum):
    SECURITY_MODE_UNSPECIFIED = "securityModeUnspecified"
    NONE = "none"
    SSL = "ssl"
    STARTTLS = "starttls"


@dataclass_json
@dataclass
class SMTPMsa:
    r"""SMTPMsa
    Configuration for communication with an SMTP service.
    """
    
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    security_mode: Optional[SMTPMsaSecurityModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityMode') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
