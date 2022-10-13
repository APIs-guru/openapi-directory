from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta:
    first_available_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstAvailableDateTime' }})
    last_available_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAvailableDateTime' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalPages' }})
    
