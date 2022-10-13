from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeSeriesRatio:
    bad_service_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badServiceFilter' }})
    good_service_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goodServiceFilter' }})
    total_service_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalServiceFilter' }})
    
