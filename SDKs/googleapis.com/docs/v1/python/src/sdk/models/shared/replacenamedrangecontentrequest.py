from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplaceNamedRangeContentRequest:
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedRangeId' }})
    named_range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedRangeName' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
