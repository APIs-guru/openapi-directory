from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MethodMap:
    create: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create' }})
    delete: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    get: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'get' }})
    set_iam_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setIamPolicy' }})
    update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    
