from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppliedLicenseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    NONE = "NONE"
    PAYG = "PAYG"
    BYOL = "BYOL"


@dataclass_json
@dataclass
class AppliedLicense:
    r"""AppliedLicense
    AppliedLicense holds the license data returned by adaptation module report.
    """
    
    os_license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osLicense') }})
    type: Optional[AppliedLicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
