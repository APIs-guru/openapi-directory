from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nodepoolautoscaling


@dataclass_json
@dataclass
class SetNodePoolAutoscalingRequest:
    autoscaling: Optional[nodepoolautoscaling.NodePoolAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscaling' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
