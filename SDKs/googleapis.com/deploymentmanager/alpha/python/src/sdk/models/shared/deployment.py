from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import credential
from . import deploymentlabelentry
from . import operation
from . import deploymentoutputentry
from . import targetconfiguration
from . import deploymentupdate


@dataclass_json
@dataclass
class Deployment:
    credential: Optional[credential.Credential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTime' }})
    labels: Optional[List[deploymentlabelentry.DeploymentLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifest' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    outputs: Optional[List[deploymentoutputentry.DeploymentOutputEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputs' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    target: Optional[targetconfiguration.TargetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    update: Optional[deploymentupdate.DeploymentUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
