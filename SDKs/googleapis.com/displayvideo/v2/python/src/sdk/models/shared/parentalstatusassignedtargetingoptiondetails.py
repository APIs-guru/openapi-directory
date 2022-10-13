from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum(str, Enum):
    PARENTAL_STATUS_UNSPECIFIED = "PARENTAL_STATUS_UNSPECIFIED"
    PARENTAL_STATUS_PARENT = "PARENTAL_STATUS_PARENT"
    PARENTAL_STATUS_NOT_A_PARENT = "PARENTAL_STATUS_NOT_A_PARENT"
    PARENTAL_STATUS_UNKNOWN = "PARENTAL_STATUS_UNKNOWN"


@dataclass_json
@dataclass
class ParentalStatusAssignedTargetingOptionDetails:
    parental_status: Optional[ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentalStatus' }})
    
