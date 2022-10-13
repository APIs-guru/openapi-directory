from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AppliedLicenseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    NONE = "NONE"
    PAYG = "PAYG"
    BYOL = "BYOL"


@dataclass_json
@dataclass
class AppliedLicense:
    os_license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osLicense' }})
    type: Optional[AppliedLicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
