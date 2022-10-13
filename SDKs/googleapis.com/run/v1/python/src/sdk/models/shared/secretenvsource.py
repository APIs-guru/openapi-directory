from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import localobjectreference


@dataclass_json
@dataclass
class SecretEnvSource:
    local_object_reference: Optional[localobjectreference.LocalObjectReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localObjectReference' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optional' }})
    
