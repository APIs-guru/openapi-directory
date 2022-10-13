from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalingevent
from . import jobmessage


@dataclass_json
@dataclass
class ListJobMessagesResponse:
    autoscaling_events: Optional[List[autoscalingevent.AutoscalingEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscalingEvents' }})
    job_messages: Optional[List[jobmessage.JobMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobMessages' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
