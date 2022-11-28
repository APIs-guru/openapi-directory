from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Pool:
    auto_restart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRestart') }})
    base_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseInstanceName') }})
    current_num_replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentNumReplicas') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    health_checks: Optional[List[HealthCheck]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthChecks') }})
    initial_num_replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialNumReplicas') }})
    labels: Optional[List[Label]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    num_replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numReplicas') }})
    resource_views: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceViews') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    target_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPool') }})
    target_pools: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPools') }})
    template: Optional[Template] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
