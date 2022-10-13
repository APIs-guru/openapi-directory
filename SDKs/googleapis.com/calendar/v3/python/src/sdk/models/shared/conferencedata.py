from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conferencesolution
from . import createconferencerequest
from . import entrypoint
from . import conferenceparameters


@dataclass_json
@dataclass
class ConferenceData:
    conference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conferenceId' }})
    conference_solution: Optional[conferencesolution.ConferenceSolution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conferenceSolution' }})
    create_request: Optional[createconferencerequest.CreateConferenceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createRequest' }})
    entry_points: Optional[List[entrypoint.EntryPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPoints' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    parameters: Optional[conferenceparameters.ConferenceParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    
