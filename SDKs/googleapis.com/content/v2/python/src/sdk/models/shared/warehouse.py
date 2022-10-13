from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import businessdayconfig
from . import warehousecutofftime
from . import address


@dataclass_json
@dataclass
class Warehouse:
    business_day_config: Optional[businessdayconfig.BusinessDayConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessDayConfig' }})
    cutoff_time: Optional[warehousecutofftime.WarehouseCutoffTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cutoffTime' }})
    handling_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handlingDays' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingAddress' }})
    
