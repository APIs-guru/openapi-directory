from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import conferencesolutionkey
from . import conferencerequeststatus


@dataclass_json
@dataclass
class CreateConferenceRequest:
    conference_solution_key: Optional[conferencesolutionkey.ConferenceSolutionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conferenceSolutionKey' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: Optional[conferencerequeststatus.ConferenceRequestStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
