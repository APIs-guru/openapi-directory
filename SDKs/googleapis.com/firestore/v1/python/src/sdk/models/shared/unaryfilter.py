from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fieldreference

class UnaryFilterOpEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    IS_NAN = "IS_NAN"
    IS_NULL = "IS_NULL"
    IS_NOT_NAN = "IS_NOT_NAN"
    IS_NOT_NULL = "IS_NOT_NULL"


@dataclass_json
@dataclass
class UnaryFilter:
    field: Optional[fieldreference.FieldReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    op: Optional[UnaryFilterOpEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    
