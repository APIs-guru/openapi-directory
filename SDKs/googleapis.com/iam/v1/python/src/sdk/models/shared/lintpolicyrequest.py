from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import expr


@dataclass_json
@dataclass
class LintPolicyRequest:
    condition: Optional[expr.Expr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullResourceName' }})
    
