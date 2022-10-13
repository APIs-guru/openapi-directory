from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ManagedLinodeSettingsSSH:
    access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class ManagedLinodeSettings:
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    ssh: Optional[ManagedLinodeSettingsSSH] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh' }})
    
