from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceConfig:
    r"""InstanceConfig
    Notebook instance configurations that can be updated.
    """
    
    enable_health_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableHealthMonitoring') }})
    notebook_upgrade_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notebookUpgradeSchedule') }})
    
