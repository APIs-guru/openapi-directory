from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filesystem_enum


@dataclass_json
@dataclass
class DiskRequest:
    authorized_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_keys' }})
    authorized_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_users' }})
    filesystem: Optional[filesystem_enum.FilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesystem' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    root_pass: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_pass' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    stackscript_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackscript_data' }})
    stackscript_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackscript_id' }})
    
