from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeEvent:
    r"""TimeEvent
    A time-stamped annotation or message event in the Span.
    """
    
    annotation: Optional[Annotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    message_event: Optional[MessageEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageEvent') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    
