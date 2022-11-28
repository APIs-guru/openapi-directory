from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeEvents:
    r"""TimeEvents
    A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.
    """
    
    dropped_annotations_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedAnnotationsCount') }})
    dropped_message_events_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedMessageEventsCount') }})
    time_event: Optional[List[TimeEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeEvent') }})
    
