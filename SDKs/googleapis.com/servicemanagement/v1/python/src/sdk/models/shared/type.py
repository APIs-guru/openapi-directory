from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TypeSyntaxEnum(str, Enum):
    SYNTAX_PROTO2 = "SYNTAX_PROTO2"
    SYNTAX_PROTO3 = "SYNTAX_PROTO3"


@dataclass_json
@dataclass
class Type:
    r"""Type
    A protocol buffer message type.
    """
    
    fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oneofs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneofs') }})
    options: Optional[List[Option]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    source_context: Optional[SourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceContext') }})
    syntax: Optional[TypeSyntaxEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syntax') }})
    
