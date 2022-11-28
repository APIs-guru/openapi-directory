from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScriptCompilationResult:
    r"""ScriptCompilationResult
    The result of the compilation of a Script
    """
    
    done: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    error: Optional[ScriptCompilationError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
