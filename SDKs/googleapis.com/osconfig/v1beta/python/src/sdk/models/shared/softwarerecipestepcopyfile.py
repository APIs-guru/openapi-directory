from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SoftwareRecipeStepCopyFile:
    artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactId' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwrite' }})
    permissions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
