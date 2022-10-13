from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import scriptcompilationerror


@dataclass_json
@dataclass
class ScriptCompilationResult:
    done: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done' }})
    error: Optional[scriptcompilationerror.ScriptCompilationError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    
