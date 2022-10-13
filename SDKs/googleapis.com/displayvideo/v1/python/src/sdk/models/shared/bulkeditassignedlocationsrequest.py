from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignedlocation


@dataclass_json
@dataclass
class BulkEditAssignedLocationsRequest:
    created_assigned_locations: Optional[List[assignedlocation.AssignedLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAssignedLocations' }})
    deleted_assigned_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedAssignedLocations' }})
    
