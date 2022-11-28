from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class APISyntaxEnum(str, Enum):
    SYNTAX_PROTO2 = "SYNTAX_PROTO2"
    SYNTAX_PROTO3 = "SYNTAX_PROTO3"


@dataclass_json
@dataclass
class API:
    r"""API
    Api is a light-weight descriptor for an API Interface. Interfaces are also described as \"protocol buffer services\" in some contexts, such as by the \"service\" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as \"APIs\" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
    """
    
    methods: Optional[List[Method]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methods') }})
    mixins: Optional[List[Mixin]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixins') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[List[Option]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    source_context: Optional[SourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceContext') }})
    syntax: Optional[APISyntaxEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syntax') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
