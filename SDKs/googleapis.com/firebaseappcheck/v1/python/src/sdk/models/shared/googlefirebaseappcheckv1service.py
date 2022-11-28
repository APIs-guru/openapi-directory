from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum(str, Enum):
    OFF = "OFF"
    UNENFORCED = "UNENFORCED"
    ENFORCED = "ENFORCED"


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1Service:
    r"""GoogleFirebaseAppcheckV1Service
    The enforcement configuration for a Firebase service supported by App Check.
    """
    
    enforcement_mode: Optional[GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcementMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
