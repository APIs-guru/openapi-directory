from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ParentalStatusTargetingOptionDetailsParentalStatusEnum(str, Enum):
    PARENTAL_STATUS_UNSPECIFIED = "PARENTAL_STATUS_UNSPECIFIED"
    PARENTAL_STATUS_PARENT = "PARENTAL_STATUS_PARENT"
    PARENTAL_STATUS_NOT_A_PARENT = "PARENTAL_STATUS_NOT_A_PARENT"
    PARENTAL_STATUS_UNKNOWN = "PARENTAL_STATUS_UNKNOWN"


@dataclass_json
@dataclass
class ParentalStatusTargetingOptionDetails:
    r"""ParentalStatusTargetingOptionDetails
    Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
    """
    
    parental_status: Optional[ParentalStatusTargetingOptionDetailsParentalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentalStatus') }})
    
