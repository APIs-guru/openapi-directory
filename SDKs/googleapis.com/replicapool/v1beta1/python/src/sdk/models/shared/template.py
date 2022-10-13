from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import healthcheck
from . import vmparams


@dataclass_json
@dataclass
class Template:
    action: Optional[action.Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    health_checks: Optional[List[healthcheck.HealthCheck]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthChecks' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    vm_params: Optional[vmparams.VMParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmParams' }})
    
