from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ScriptErrorErrorCodeEnum(str, Enum):
    ERROR_CODE_UNSPECIFIED = "ERROR_CODE_UNSPECIFIED"
    SYNTAX_ERROR = "SYNTAX_ERROR"
    DEPRECATED_SYNTAX = "DEPRECATED_SYNTAX"
    INTERNAL_ERROR = "INTERNAL_ERROR"


@dataclass_json
@dataclass
class ScriptError:
    r"""ScriptError
    An error message for a custom bidding script.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    error_code: Optional[ScriptErrorErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    
