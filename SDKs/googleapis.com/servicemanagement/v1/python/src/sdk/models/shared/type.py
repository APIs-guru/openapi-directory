from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import field
from . import option
from . import sourcecontext

class TypeSyntaxEnum(str, Enum):
    SYNTAX_PROTO2 = "SYNTAX_PROTO2"
    SYNTAX_PROTO3 = "SYNTAX_PROTO3"


@dataclass_json
@dataclass
class Type:
    fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oneofs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneofs' }})
    options: Optional[List[option.Option]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    source_context: Optional[sourcecontext.SourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceContext' }})
    syntax: Optional[TypeSyntaxEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syntax' }})
    
