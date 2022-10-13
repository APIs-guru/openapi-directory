from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gsuiteprincipal


@dataclass_json
@dataclass
class Principal:
    group_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupResourceName' }})
    gsuite_principal: Optional[gsuiteprincipal.GSuitePrincipal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gsuitePrincipal' }})
    user_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userResourceName' }})
    
