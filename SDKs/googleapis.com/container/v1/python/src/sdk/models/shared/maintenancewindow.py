from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dailymaintenancewindow
from . import timewindow
from . import recurringtimewindow


@dataclass_json
@dataclass
class MaintenanceWindow:
    daily_maintenance_window: Optional[dailymaintenancewindow.DailyMaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyMaintenanceWindow' }})
    maintenance_exclusions: Optional[dict[str, timewindow.TimeWindow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceExclusions' }})
    recurring_window: Optional[recurringtimewindow.RecurringTimeWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurringWindow' }})
    
