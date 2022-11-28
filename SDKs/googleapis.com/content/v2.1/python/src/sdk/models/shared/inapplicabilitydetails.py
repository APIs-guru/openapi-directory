from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InapplicabilityDetailsInapplicableReasonEnum(str, Enum):
    INAPPLICABLE_REASON_UNSPECIFIED = "INAPPLICABLE_REASON_UNSPECIFIED"
    CANNOT_BEAT_BUYBOX_WINNER = "CANNOT_BEAT_BUYBOX_WINNER"
    ALREADY_WINNING_BUYBOX = "ALREADY_WINNING_BUYBOX"
    TRIUMPHED_OVER_BY_SAME_TYPE_RULE = "TRIUMPHED_OVER_BY_SAME_TYPE_RULE"
    TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER = "TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER"
    RESTRICTIONS_NOT_MET = "RESTRICTIONS_NOT_MET"
    UNCATEGORIZED = "UNCATEGORIZED"
    INVALID_AUTO_PRICE_MIN = "INVALID_AUTO_PRICE_MIN"
    INVALID_FLOOR_CONFIG = "INVALID_FLOOR_CONFIG"


@dataclass_json
@dataclass
class InapplicabilityDetails:
    r"""InapplicabilityDetails
    Map of inapplicability details.
    """
    
    inapplicable_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inapplicableCount') }})
    inapplicable_reason: Optional[InapplicabilityDetailsInapplicableReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inapplicableReason') }})
    
