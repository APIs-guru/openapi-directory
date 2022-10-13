from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Auth:
    access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLevels' }})
    audiences: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audiences' }})
    claims: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims' }})
    presenter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presenter' }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principal' }})
    
