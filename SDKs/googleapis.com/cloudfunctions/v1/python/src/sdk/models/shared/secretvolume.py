from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secretversion


@dataclass_json
@dataclass
class SecretVolume:
    mount_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPath' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    versions: Optional[List[secretversion.SecretVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
