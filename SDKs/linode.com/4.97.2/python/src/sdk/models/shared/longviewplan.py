from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LongviewPlanLongviewSubscriptionEnum(str, Enum):
    LONGVIEW_3 = "longview-3"
    LONGVIEW_10 = "longview-10"
    LONGVIEW_40 = "longview-40"
    LONGVIEW_100 = "longview-100"


@dataclass_json
@dataclass
class LongviewPlan:
    r"""LongviewPlan
    Longview Plan object.
    
    """
    
    longview_subscription: Optional[LongviewPlanLongviewSubscriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longview_subscription') }})
    
