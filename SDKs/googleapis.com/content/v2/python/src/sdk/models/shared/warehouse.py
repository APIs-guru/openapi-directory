from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Warehouse:
    r"""Warehouse
    A fulfillment warehouse, which stores and handles inventory.
    """
    
    business_day_config: Optional[BusinessDayConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessDayConfig') }})
    cutoff_time: Optional[WarehouseCutoffTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cutoffTime') }})
    handling_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handlingDays') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    shipping_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingAddress') }})
    
