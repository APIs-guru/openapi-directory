from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import option

class MethodSyntaxEnum(str, Enum):
    SYNTAX_PROTO2 = "SYNTAX_PROTO2"
    SYNTAX_PROTO3 = "SYNTAX_PROTO3"


@dataclass_json
@dataclass
class Method:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[List[option.Option]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    request_streaming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestStreaming' }})
    request_type_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTypeUrl' }})
    response_streaming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseStreaming' }})
    response_type_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseTypeUrl' }})
    syntax: Optional[MethodSyntaxEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syntax' }})
    
