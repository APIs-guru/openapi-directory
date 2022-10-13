from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WellTagSearch:
    owner_full_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_full_name' }})
    well_tag_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'well_tag_number' }})
    
