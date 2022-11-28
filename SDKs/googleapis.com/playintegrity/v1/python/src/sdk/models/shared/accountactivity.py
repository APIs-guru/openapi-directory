from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountActivityActivityLevelEnum(str, Enum):
    ACTIVITY_LEVEL_UNSPECIFIED = "ACTIVITY_LEVEL_UNSPECIFIED"
    UNEVALUATED = "UNEVALUATED"
    UNUSUAL = "UNUSUAL"
    UNKNOWN = "UNKNOWN"
    TYPICAL_BASIC = "TYPICAL_BASIC"
    TYPICAL_STRONG = "TYPICAL_STRONG"


@dataclass_json
@dataclass
class AccountActivity:
    r"""AccountActivity
    Contains a signal helping apps differentiating between likely genuine users and likely non-genuine traffic (such as accounts being used for fraud, accounts used by automated traffic, or accounts used in device farms) based on the presence and volume of Play store activity.
    """
    
    activity_level: Optional[AccountActivityActivityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityLevel') }})
    
