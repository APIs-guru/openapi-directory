from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MaintenanceWindow:
    r"""MaintenanceWindow
    MaintenanceWindow defines the maintenance window to be used for the cluster.
    """
    
    daily_maintenance_window: Optional[DailyMaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyMaintenanceWindow') }})
    maintenance_exclusions: Optional[dict[str, TimeWindow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceExclusions') }})
    recurring_window: Optional[RecurringTimeWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringWindow') }})
    
