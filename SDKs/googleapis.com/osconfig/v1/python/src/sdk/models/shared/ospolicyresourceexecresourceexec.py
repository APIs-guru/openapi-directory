from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OsPolicyResourceExecResourceExecInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    NONE = "NONE"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclass
class OsPolicyResourceExecResourceExec:
    r"""OsPolicyResourceExecResourceExec
    A file or script to execute.
    """
    
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    file: Optional[OsPolicyResourceFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    interpreter: Optional[OsPolicyResourceExecResourceExecInterpreterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreter') }})
    output_file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFilePath') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
