from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExecStepConfigInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    NONE = "NONE"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclass
class ExecStepConfig:
    r"""ExecStepConfig
    Common configurations for an ExecStep.
    """
    
    allowed_success_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedSuccessCodes') }})
    gcs_object: Optional[GcsObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsObject') }})
    interpreter: Optional[ExecStepConfigInterpreterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreter') }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPath') }})
    
