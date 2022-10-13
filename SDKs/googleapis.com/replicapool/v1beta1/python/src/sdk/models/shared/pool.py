from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import healthcheck
from . import label
from . import template


@dataclass_json
@dataclass
class Pool:
    auto_restart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRestart' }})
    base_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseInstanceName' }})
    current_num_replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentNumReplicas' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    health_checks: Optional[List[healthcheck.HealthCheck]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthChecks' }})
    initial_num_replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialNumReplicas' }})
    labels: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    num_replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numReplicas' }})
    resource_views: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceViews' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    target_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPool' }})
    target_pools: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPools' }})
    template: Optional[template.Template] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
