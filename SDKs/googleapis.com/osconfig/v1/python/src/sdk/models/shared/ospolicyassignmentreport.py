from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyassignmentreportospolicycompliance


@dataclass_json
@dataclass
class OsPolicyAssignmentReport:
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    last_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_policy_assignment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyAssignment' }})
    os_policy_compliances: Optional[List[ospolicyassignmentreportospolicycompliance.OsPolicyAssignmentReportOsPolicyCompliance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyCompliances' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
