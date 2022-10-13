from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeploymentConfig:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    manifest_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifestFileName' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptId' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
