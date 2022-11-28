from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Template:
    r"""Template
    The template used for creating replicas in the pool.
    """
    
    action: Optional[Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    health_checks: Optional[List[HealthCheck]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthChecks') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    vm_params: Optional[VMParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmParams') }})
    
