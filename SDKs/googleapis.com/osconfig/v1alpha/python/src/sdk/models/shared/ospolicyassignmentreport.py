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
class OsPolicyAssignmentReport:
    r"""OsPolicyAssignmentReport
    A report of the OS policy assignment status for a given instance.
    """
    
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    last_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_policy_assignment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyAssignment') }})
    os_policy_compliances: Optional[List[OsPolicyAssignmentReportOsPolicyCompliance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyCompliances') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
