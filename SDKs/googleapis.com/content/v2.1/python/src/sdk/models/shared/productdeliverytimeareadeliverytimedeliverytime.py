from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductDeliveryTimeAreaDeliveryTimeDeliveryTime:
    r"""ProductDeliveryTimeAreaDeliveryTimeDeliveryTime
    A delivery time for this product.
    """
    
    max_handling_time_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxHandlingTimeDays') }})
    max_transit_time_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTransitTimeDays') }})
    min_handling_time_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minHandlingTimeDays') }})
    min_transit_time_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minTransitTimeDays') }})
    
