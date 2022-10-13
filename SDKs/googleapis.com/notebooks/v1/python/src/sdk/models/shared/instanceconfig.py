from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceConfig:
    enable_health_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableHealthMonitoring' }})
    notebook_upgrade_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notebookUpgradeSchedule' }})
    
