from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LongviewSubscriptionIDEnum(str, Enum):
    LONGVIEW_3 = "longview-3"
    LONGVIEW_10 = "longview-10"
    LONGVIEW_40 = "longview-40"
    LONGVIEW_100 = "longview-100"


@dataclass_json
@dataclass
class LongviewSubscriptionPrice:
    r"""LongviewSubscriptionPrice
    Pricing information about this Subscription tier.
    
    """
    
    hourly: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourly') }})
    monthly: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    

@dataclass_json
@dataclass
class LongviewSubscription:
    r"""LongviewSubscription
    A Longview Subscription represents a tier of Longview service you can subscribe to.
    
    """
    
    clients_included: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clients_included') }})
    id: Optional[LongviewSubscriptionIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    price: Optional[LongviewSubscriptionPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
