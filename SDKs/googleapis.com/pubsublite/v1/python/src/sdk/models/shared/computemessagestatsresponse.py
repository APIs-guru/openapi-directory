from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComputeMessageStatsResponse:
    message_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageBytes' }})
    message_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageCount' }})
    minimum_event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumEventTime' }})
    minimum_publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumPublishTime' }})
    
