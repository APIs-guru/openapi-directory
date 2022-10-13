from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorcontext
from . import servicecontext


@dataclass_json
@dataclass
class ErrorEvent:
    context: Optional[errorcontext.ErrorContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    service_context: Optional[servicecontext.ServiceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceContext' }})
    
