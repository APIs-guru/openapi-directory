from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customfield


@dataclass_json
@dataclass
class CounterOptions:
    custom_fields: Optional[List[customfield.CustomField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    
