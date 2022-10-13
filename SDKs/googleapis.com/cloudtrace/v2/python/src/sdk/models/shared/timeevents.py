from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeevent


@dataclass_json
@dataclass
class TimeEvents:
    dropped_annotations_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droppedAnnotationsCount' }})
    dropped_message_events_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droppedMessageEventsCount' }})
    time_event: Optional[List[timeevent.TimeEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeEvent' }})
    
