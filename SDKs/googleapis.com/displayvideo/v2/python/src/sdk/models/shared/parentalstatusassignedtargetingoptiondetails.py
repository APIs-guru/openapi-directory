from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum(str, Enum):
    PARENTAL_STATUS_UNSPECIFIED = "PARENTAL_STATUS_UNSPECIFIED"
    PARENTAL_STATUS_PARENT = "PARENTAL_STATUS_PARENT"
    PARENTAL_STATUS_NOT_A_PARENT = "PARENTAL_STATUS_NOT_A_PARENT"
    PARENTAL_STATUS_UNKNOWN = "PARENTAL_STATUS_UNKNOWN"


@dataclass_json
@dataclass
class ParentalStatusAssignedTargetingOptionDetails:
    r"""ParentalStatusAssignedTargetingOptionDetails
    Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
    """
    
    parental_status: Optional[ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentalStatus') }})
    
