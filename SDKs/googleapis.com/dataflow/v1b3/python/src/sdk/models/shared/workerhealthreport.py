from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkerHealthReport:
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msg' }})
    pods: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pods' }})
    report_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportInterval' }})
    vm_broken_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmBrokenCode' }})
    vm_is_broken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmIsBroken' }})
    vm_is_healthy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmIsHealthy' }})
    vm_startup_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmStartupTime' }})
    
