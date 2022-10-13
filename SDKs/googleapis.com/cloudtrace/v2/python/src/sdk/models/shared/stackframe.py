from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import truncatablestring
from . import truncatablestring
from . import module
from . import truncatablestring
from . import truncatablestring


@dataclass_json
@dataclass
class StackFrame:
    column_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnNumber' }})
    file_name: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    function_name: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionName' }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineNumber' }})
    load_module: Optional[module.Module] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadModule' }})
    original_function_name: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalFunctionName' }})
    source_version: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVersion' }})
    
