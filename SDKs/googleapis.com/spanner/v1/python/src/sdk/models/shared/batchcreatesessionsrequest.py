from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateSessionsRequestInput:
    r"""BatchCreateSessionsRequestInput
    The request for BatchCreateSessions.
    """
    
    session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionCount') }})
    session_template: Optional[SessionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionTemplate') }})
    
