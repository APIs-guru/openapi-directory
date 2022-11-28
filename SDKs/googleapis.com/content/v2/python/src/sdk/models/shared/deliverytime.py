from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryTime:
    cutoff_time: Optional[CutoffTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cutoffTime') }})
    handling_business_day_config: Optional[BusinessDayConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handlingBusinessDayConfig') }})
    holiday_cutoffs: Optional[List[HolidayCutoff]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holidayCutoffs') }})
    max_handling_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxHandlingTimeInDays') }})
    max_transit_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTransitTimeInDays') }})
    min_handling_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minHandlingTimeInDays') }})
    min_transit_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minTransitTimeInDays') }})
    transit_business_day_config: Optional[BusinessDayConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitBusinessDayConfig') }})
    transit_time_table: Optional[TransitTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitTimeTable') }})
    warehouse_based_delivery_times: Optional[List[WarehouseBasedDeliveryTime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouseBasedDeliveryTimes') }})
    
