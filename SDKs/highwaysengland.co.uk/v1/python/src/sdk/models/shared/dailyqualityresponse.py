from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import qualities


@dataclass_json
@dataclass
class DailyQualityResponse:
    qualities: Optional[List[qualities.Qualities]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Qualities' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_count' }})
    
