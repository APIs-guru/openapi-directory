from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import credential
from . import deploymentupdatelabelentry


@dataclass_json
@dataclass
class DeploymentUpdate:
    credential: Optional[credential.Credential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[List[deploymentupdatelabelentry.DeploymentUpdateLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifest' }})
    
