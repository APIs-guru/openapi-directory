from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import field

class TypePrimitiveEnum(str, Enum):
    PRIMITIVE_UNSPECIFIED = "PRIMITIVE_UNSPECIFIED"
    STRING = "STRING"
    VARIES = "VARIES"
    UNESCAPED_STRING = "UNESCAPED_STRING"


@dataclass_json
@dataclass
class Type:
    fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primitive: Optional[TypePrimitiveEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primitive' }})
    
