from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deploymentconfig


@dataclass_json
@dataclass
class UpdateDeploymentRequest:
    deployment_config: Optional[deploymentconfig.DeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfig' }})
    
