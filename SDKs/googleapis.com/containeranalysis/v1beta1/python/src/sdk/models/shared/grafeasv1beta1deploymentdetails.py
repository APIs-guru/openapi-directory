from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deployment


@dataclass_json
@dataclass
class GrafeasV1beta1DeploymentDetails:
    deployment: Optional[deployment.Deployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    
