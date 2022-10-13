from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShellTask:
    command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCode' }})
    
