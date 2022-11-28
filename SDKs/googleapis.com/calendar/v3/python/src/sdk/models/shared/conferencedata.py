from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConferenceData:
    conference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceId') }})
    conference_solution: Optional[ConferenceSolution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceSolution') }})
    create_request: Optional[CreateConferenceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createRequest') }})
    entry_points: Optional[List[EntryPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoints') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    parameters: Optional[ConferenceParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
