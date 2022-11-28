from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportRuntimeEventRequest:
    r"""ReportRuntimeEventRequest
    Request for reporting a Managed Notebook Event.
    """
    
    event: Optional[Event] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    
