from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googletypeexpr


@dataclass_json
@dataclass
class GoogleIamV2betaDenyRule:
    denial_condition: Optional[googletypeexpr.GoogleTypeExpr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denialCondition' }})
    denied_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deniedPermissions' }})
    denied_principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deniedPrincipals' }})
    exception_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceptionPermissions' }})
    exception_principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceptionPrincipals' }})
    
