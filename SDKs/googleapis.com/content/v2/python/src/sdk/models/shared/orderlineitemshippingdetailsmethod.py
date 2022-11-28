from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrderLineItemShippingDetailsMethod:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    max_days_in_transit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDaysInTransit') }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    min_days_in_transit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minDaysInTransit') }})
    
