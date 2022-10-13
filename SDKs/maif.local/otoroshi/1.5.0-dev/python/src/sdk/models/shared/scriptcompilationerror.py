from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScriptCompilationError:
    column: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    file: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    line: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    message: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    raw_message: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawMessage' }})
    
