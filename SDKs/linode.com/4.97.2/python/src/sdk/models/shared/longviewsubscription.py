from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LongviewSubscriptionIDEnum(str, Enum):
    LONGVIEW_3 = "longview-3"
    LONGVIEW_10 = "longview-10"
    LONGVIEW_40 = "longview-40"
    LONGVIEW_100 = "longview-100"


@dataclass_json
@dataclass
class LongviewSubscriptionPrice:
    hourly: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourly' }})
    monthly: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly' }})
    

@dataclass_json
@dataclass
class LongviewSubscription:
    clients_included: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clients_included' }})
    id: Optional[LongviewSubscriptionIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    price: Optional[LongviewSubscriptionPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
