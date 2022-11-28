from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HTTPSTriggerSecurityLevelEnum(str, Enum):
    SECURITY_LEVEL_UNSPECIFIED = "SECURITY_LEVEL_UNSPECIFIED"
    SECURE_ALWAYS = "SECURE_ALWAYS"
    SECURE_OPTIONAL = "SECURE_OPTIONAL"


@dataclass_json
@dataclass
class HTTPSTriggerInput:
    r"""HTTPSTriggerInput
    Describes HttpsTrigger, could be used to connect web hooks to function.
    """
    
    security_level: Optional[HTTPSTriggerSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    

@dataclass_json
@dataclass
class HTTPSTrigger:
    r"""HTTPSTrigger
    Describes HttpsTrigger, could be used to connect web hooks to function.
    """
    
    security_level: Optional[HTTPSTriggerSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
