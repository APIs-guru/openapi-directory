from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobevent


@dataclass_json
@dataclass
class ClientEvent:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    event_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventNotes' }})
    job_event: Optional[jobevent.JobEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobEvent' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
