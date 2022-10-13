from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OverallQualityResponse:
    data_quality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_quality' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_count' }})
    sites: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    
