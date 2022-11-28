from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SoftwareRecipeStepRunScriptInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclass
class SoftwareRecipeStepRunScript:
    r"""SoftwareRecipeStepRunScript
    Runs a script through an interpreter.
    """
    
    allowed_exit_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedExitCodes') }})
    interpreter: Optional[SoftwareRecipeStepRunScriptInterpreterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreter') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
