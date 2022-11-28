from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StackFrame:
    r"""StackFrame
    Represents a single stack frame in a stack trace.
    """
    
    column_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnNumber') }})
    file_name: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    function_name: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineNumber') }})
    load_module: Optional[Module] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadModule') }})
    original_function_name: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalFunctionName') }})
    source_version: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    
