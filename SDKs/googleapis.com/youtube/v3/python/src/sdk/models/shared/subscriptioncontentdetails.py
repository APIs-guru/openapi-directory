from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SubscriptionContentDetailsActivityTypeEnum(str, Enum):
    SUBSCRIPTION_ACTIVITY_TYPE_UNSPECIFIED = "subscriptionActivityTypeUnspecified"
    ALL = "all"
    UPLOADS = "uploads"


@dataclass_json
@dataclass
class SubscriptionContentDetails:
    activity_type: Optional[SubscriptionContentDetailsActivityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    new_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newItemCount' }})
    total_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItemCount' }})
    
