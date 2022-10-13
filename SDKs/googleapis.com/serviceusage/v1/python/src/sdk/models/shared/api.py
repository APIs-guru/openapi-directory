from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import method
from . import mixin
from . import option
from . import sourcecontext

class APISyntaxEnum(str, Enum):
    SYNTAX_PROTO2 = "SYNTAX_PROTO2"
    SYNTAX_PROTO3 = "SYNTAX_PROTO3"


@dataclass_json
@dataclass
class API:
    methods: Optional[List[method.Method]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methods' }})
    mixins: Optional[List[mixin.Mixin]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mixins' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[List[option.Option]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    source_context: Optional[sourcecontext.SourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceContext' }})
    syntax: Optional[APISyntaxEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syntax' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
