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
class MetricsScope:
    r"""MetricsScope
    Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    monitored_projects: Optional[List[MonitoredProject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredProjects') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
