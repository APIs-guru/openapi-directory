from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deploymentconfig
from . import entrypoint


@dataclass_json
@dataclass
class Deployment:
    deployment_config: Optional[deploymentconfig.DeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfig' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    entry_points: Optional[List[entrypoint.EntryPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPoints' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
