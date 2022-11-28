from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventTrigger:
    r"""EventTrigger
    Describes EventTrigger, used to request events be sent from another service.
    """
    
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    failure_policy: Optional[FailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failurePolicy') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
