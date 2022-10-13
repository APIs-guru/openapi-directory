from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class SoftwareRecipeStepRunScriptInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclass
class SoftwareRecipeStepRunScript:
    allowed_exit_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedExitCodes' }})
    interpreter: Optional[SoftwareRecipeStepRunScriptInterpreterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpreter' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    
