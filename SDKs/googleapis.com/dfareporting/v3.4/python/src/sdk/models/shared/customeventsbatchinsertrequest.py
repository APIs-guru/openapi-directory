from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customevent


@dataclass_json
@dataclass
class CustomEventsBatchInsertRequest:
    custom_events: Optional[List[customevent.CustomEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customEvents' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
