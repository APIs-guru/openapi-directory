from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MethodSyntaxEnum(str, Enum):
    SYNTAX_PROTO2 = "SYNTAX_PROTO2"
    SYNTAX_PROTO3 = "SYNTAX_PROTO3"


@dataclass_json
@dataclass
class Method:
    r"""Method
    Method represents a method of an API interface.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[List[Option]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    request_streaming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestStreaming') }})
    request_type_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTypeUrl') }})
    response_streaming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseStreaming') }})
    response_type_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseTypeUrl') }})
    syntax: Optional[MethodSyntaxEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syntax') }})
    
