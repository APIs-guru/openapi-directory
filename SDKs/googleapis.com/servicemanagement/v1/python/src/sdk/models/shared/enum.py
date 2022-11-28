from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnumSyntaxEnum(str, Enum):
    SYNTAX_PROTO2 = "SYNTAX_PROTO2"
    SYNTAX_PROTO3 = "SYNTAX_PROTO3"


@dataclass_json
@dataclass
class Enum:
    r"""Enum
    Enum type definition.
    """
    
    enumvalue: Optional[List[EnumValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumvalue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[List[Option]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    source_context: Optional[SourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceContext') }})
    syntax: Optional[EnumSyntaxEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syntax') }})
    
