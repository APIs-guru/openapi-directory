from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductDeliveryTimeAreaDeliveryTimeDeliveryTime:
    max_handling_time_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxHandlingTimeDays' }})
    max_transit_time_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTransitTimeDays' }})
    min_handling_time_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minHandlingTimeDays' }})
    min_transit_time_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minTransitTimeDays' }})
    
