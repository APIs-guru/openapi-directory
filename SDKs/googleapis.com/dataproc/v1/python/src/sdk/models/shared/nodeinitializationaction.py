from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodeInitializationAction:
    executable_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executableFile' }})
    execution_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTimeout' }})
    
