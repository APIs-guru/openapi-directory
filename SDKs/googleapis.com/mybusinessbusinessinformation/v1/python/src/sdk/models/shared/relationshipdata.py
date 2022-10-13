from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relevantlocation
from . import relevantlocation


@dataclass_json
@dataclass
class RelationshipData:
    children_locations: Optional[List[relevantlocation.RelevantLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childrenLocations' }})
    parent_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentChain' }})
    parent_location: Optional[relevantlocation.RelevantLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLocation' }})
    
