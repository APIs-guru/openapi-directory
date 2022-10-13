from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auditeventtype


@dataclass_json
@dataclass
class AuditEventTypesResp:
    event_types: Optional[List[auditeventtype.AuditEventType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypes' }})
    
