from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcefile

class OsPolicyResourceExecResourceExecInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    NONE = "NONE"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclass
class OsPolicyResourceExecResourceExec:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    file: Optional[ospolicyresourcefile.OsPolicyResourceFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    interpreter: Optional[OsPolicyResourceExecResourceExecInterpreterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpreter' }})
    output_file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputFilePath' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    
