from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import location


@dataclass_json
@dataclass
class MatchedLocation:
    is_exact_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isExactMatch' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    
