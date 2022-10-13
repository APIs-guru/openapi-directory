from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventbatchrecordfailure
from . import eventrecordfailure
from . import playerevent


@dataclass_json
@dataclass
class EventUpdateResponse:
    batch_failures: Optional[List[eventbatchrecordfailure.EventBatchRecordFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchFailures' }})
    event_failures: Optional[List[eventrecordfailure.EventRecordFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventFailures' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    player_events: Optional[List[playerevent.PlayerEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerEvents' }})
    
