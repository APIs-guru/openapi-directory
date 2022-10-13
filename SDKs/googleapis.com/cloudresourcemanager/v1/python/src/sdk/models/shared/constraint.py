from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import listconstraint

class ConstraintConstraintDefaultEnum(str, Enum):
    CONSTRAINT_DEFAULT_UNSPECIFIED = "CONSTRAINT_DEFAULT_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"


@dataclass_json
@dataclass
class Constraint:
    boolean_constraint: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanConstraint' }})
    constraint_default: Optional[ConstraintConstraintDefaultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraintDefault' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    list_constraint: Optional[listconstraint.ListConstraint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listConstraint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
