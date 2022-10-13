from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1basiclevel
from . import googleidentityaccesscontextmanagerv1customlevel


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1AccessLevel:
    basic: Optional[googleidentityaccesscontextmanagerv1basiclevel.GoogleIdentityAccesscontextmanagerV1BasicLevel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basic' }})
    custom: Optional[googleidentityaccesscontextmanagerv1customlevel.GoogleIdentityAccesscontextmanagerV1CustomLevel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
