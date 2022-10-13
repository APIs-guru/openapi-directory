from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gcsobject

class ExecStepConfigInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    NONE = "NONE"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclass
class ExecStepConfig:
    allowed_success_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedSuccessCodes' }})
    gcs_object: Optional[gcsobject.GcsObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsObject' }})
    interpreter: Optional[ExecStepConfigInterpreterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpreter' }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPath' }})
    
