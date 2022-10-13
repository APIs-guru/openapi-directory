from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import event


@dataclass_json
@dataclass
class ReportRuntimeEventRequest:
    event: Optional[event.Event] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmId' }})
    
