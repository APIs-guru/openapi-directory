from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LongviewPlanLongviewSubscriptionEnum(str, Enum):
    LONGVIEW_3 = "longview-3"
    LONGVIEW_10 = "longview-10"
    LONGVIEW_40 = "longview-40"
    LONGVIEW_100 = "longview-100"


@dataclass_json
@dataclass
class LongviewPlan:
    longview_subscription: Optional[LongviewPlanLongviewSubscriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longview_subscription' }})
    
