from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListJobMessagesResponse:
    r"""ListJobMessagesResponse
    Response to a request to list job messages.
    """
    
    autoscaling_events: Optional[List[AutoscalingEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingEvents') }})
    job_messages: Optional[List[JobMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobMessages') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
