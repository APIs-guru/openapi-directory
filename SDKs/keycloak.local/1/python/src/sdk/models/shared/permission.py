from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Permission:
    claims: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims' }})
    rsid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rsid' }})
    rsname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rsname' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    
