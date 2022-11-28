from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateConferenceRequest:
    conference_solution_key: Optional[ConferenceSolutionKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceSolutionKey') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: Optional[ConferenceRequestStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
