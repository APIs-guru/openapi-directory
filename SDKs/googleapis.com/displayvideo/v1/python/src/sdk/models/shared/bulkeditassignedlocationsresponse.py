from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignedlocation


@dataclass_json
@dataclass
class BulkEditAssignedLocationsResponse:
    assigned_locations: Optional[List[assignedlocation.AssignedLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedLocations' }})
    
