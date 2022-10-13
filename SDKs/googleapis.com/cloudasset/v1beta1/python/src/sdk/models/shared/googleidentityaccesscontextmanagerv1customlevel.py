from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import expr


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1CustomLevel:
    expr: Optional[expr.Expr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expr' }})
    
