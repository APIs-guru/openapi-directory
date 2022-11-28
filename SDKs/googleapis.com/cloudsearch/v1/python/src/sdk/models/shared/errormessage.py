from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorMessage:
    r"""ErrorMessage
    Error message per source response.
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
