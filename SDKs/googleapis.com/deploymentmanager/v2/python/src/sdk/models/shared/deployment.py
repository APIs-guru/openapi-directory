from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deploymentlabelentry
from . import operation
from . import targetconfiguration
from . import deploymentupdate


@dataclass_json
@dataclass
class Deployment:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTime' }})
    labels: Optional[List[deploymentlabelentry.DeploymentLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifest' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    target: Optional[targetconfiguration.TargetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    update: Optional[deploymentupdate.DeploymentUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
