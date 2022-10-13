from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIDataRow:
    clicks: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clicks' }})
    ctr: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ctr' }})
    impressions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressions' }})
    keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
