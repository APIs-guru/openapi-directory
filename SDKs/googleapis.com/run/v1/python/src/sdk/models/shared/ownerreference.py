from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OwnerReference:
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    block_owner_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockOwnerDeletion' }})
    controller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controller' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
