from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import weeklymaintenancewindow


@dataclass_json
@dataclass
class MaintenancePolicy:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    weekly_maintenance_window: Optional[List[weeklymaintenancewindow.WeeklyMaintenanceWindow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeklyMaintenanceWindow' }})
    
