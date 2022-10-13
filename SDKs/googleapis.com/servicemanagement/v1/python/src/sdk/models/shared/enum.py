from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enumvalue
from . import option
from . import sourcecontext

class EnumSyntaxEnum(str, Enum):
    SYNTAX_PROTO2 = "SYNTAX_PROTO2"
    SYNTAX_PROTO3 = "SYNTAX_PROTO3"


@dataclass_json
@dataclass
class Enum:
    enumvalue: Optional[List[enumvalue.EnumValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumvalue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[List[option.Option]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    source_context: Optional[sourcecontext.SourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceContext' }})
    syntax: Optional[EnumSyntaxEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syntax' }})
    
