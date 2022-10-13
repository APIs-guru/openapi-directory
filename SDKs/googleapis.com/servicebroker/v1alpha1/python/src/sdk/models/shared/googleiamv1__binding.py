from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googletype__expr


@dataclass_json
@dataclass
class GoogleIamV1Binding:
    condition: Optional[googletype__expr.GoogleTypeExpr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
