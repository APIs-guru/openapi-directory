from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Sites:
    active: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Active' }})
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    lattitude: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lattitude' }})
    longitude: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Longitude' }})
    site_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SiteId' }})
    
