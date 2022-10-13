from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customevent
from . import customeventerror


@dataclass_json
@dataclass
class CustomEventStatus:
    custom_event: Optional[customevent.CustomEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customEvent' }})
    errors: Optional[List[customeventerror.CustomEventError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
