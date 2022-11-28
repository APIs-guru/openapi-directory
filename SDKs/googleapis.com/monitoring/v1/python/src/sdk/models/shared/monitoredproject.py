from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MonitoredProjectInput:
    r"""MonitoredProjectInput
    A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class MonitoredProject:
    r"""MonitoredProject
    A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
