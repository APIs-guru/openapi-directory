from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VolumeMount:
    mount_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPath' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    sub_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subPath' }})
    
