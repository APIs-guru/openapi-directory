from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkerHealthReport:
    r"""WorkerHealthReport
    WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
    """
    
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    pods: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pods') }})
    report_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInterval') }})
    vm_broken_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmBrokenCode') }})
    vm_is_broken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmIsBroken') }})
    vm_is_healthy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmIsHealthy') }})
    vm_startup_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmStartupTime') }})
    
