from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fieldreference
from . import value

class FieldFilterOpEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    LESS_THAN = "LESS_THAN"
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL"
    GREATER_THAN = "GREATER_THAN"
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL"
    EQUAL = "EQUAL"
    NOT_EQUAL = "NOT_EQUAL"
    ARRAY_CONTAINS = "ARRAY_CONTAINS"
    IN = "IN"
    ARRAY_CONTAINS_ANY = "ARRAY_CONTAINS_ANY"
    NOT_IN = "NOT_IN"


@dataclass_json
@dataclass
class FieldFilter:
    field: Optional[fieldreference.FieldReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    op: Optional[FieldFilterOpEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    value: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
