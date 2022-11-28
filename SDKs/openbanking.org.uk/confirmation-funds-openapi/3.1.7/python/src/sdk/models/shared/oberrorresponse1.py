from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObErrorResponse1:
    r"""ObErrorResponse1
    An array of detail error codes, and messages, and URLs to documentation to help remediation.
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    errors: List[ObError1] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
