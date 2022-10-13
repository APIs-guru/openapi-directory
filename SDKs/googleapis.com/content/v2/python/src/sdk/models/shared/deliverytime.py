from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cutofftime
from . import businessdayconfig
from . import holidaycutoff
from . import businessdayconfig
from . import transittable
from . import warehousebaseddeliverytime


@dataclass_json
@dataclass
class DeliveryTime:
    cutoff_time: Optional[cutofftime.CutoffTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cutoffTime' }})
    handling_business_day_config: Optional[businessdayconfig.BusinessDayConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handlingBusinessDayConfig' }})
    holiday_cutoffs: Optional[List[holidaycutoff.HolidayCutoff]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holidayCutoffs' }})
    max_handling_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxHandlingTimeInDays' }})
    max_transit_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTransitTimeInDays' }})
    min_handling_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minHandlingTimeInDays' }})
    min_transit_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minTransitTimeInDays' }})
    transit_business_day_config: Optional[businessdayconfig.BusinessDayConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitBusinessDayConfig' }})
    transit_time_table: Optional[transittable.TransitTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitTimeTable' }})
    warehouse_based_delivery_times: Optional[List[warehousebaseddeliverytime.WarehouseBasedDeliveryTime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouseBasedDeliveryTimes' }})
    
