from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorInfo:
    r"""ErrorInfo
    Error information about the response.
    """
    
    error_messages: Optional[List[ErrorMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessages') }})
    
