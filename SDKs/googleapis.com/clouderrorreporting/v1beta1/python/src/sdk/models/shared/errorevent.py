from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorEvent:
    r"""ErrorEvent
    An error event which is returned by the Error Reporting system.
    """
    
    context: Optional[ErrorContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    service_context: Optional[ServiceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceContext') }})
    
