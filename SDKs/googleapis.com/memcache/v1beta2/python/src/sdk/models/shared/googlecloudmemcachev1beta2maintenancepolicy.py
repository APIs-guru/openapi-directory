from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMemcacheV1beta2MaintenancePolicyInput:
    r"""GoogleCloudMemcacheV1beta2MaintenancePolicyInput
    Maintenance policy per instance.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    weekly_maintenance_window: Optional[List[WeeklyMaintenanceWindow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyMaintenanceWindow') }})
    

@dataclass_json
@dataclass
class GoogleCloudMemcacheV1beta2MaintenancePolicy:
    r"""GoogleCloudMemcacheV1beta2MaintenancePolicy
    Maintenance policy per instance.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    weekly_maintenance_window: Optional[List[WeeklyMaintenanceWindow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyMaintenanceWindow') }})
    
