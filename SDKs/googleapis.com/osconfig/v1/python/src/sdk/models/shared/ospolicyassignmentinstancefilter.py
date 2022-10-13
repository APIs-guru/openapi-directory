from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyassignmentlabelset
from . import ospolicyassignmentlabelset
from . import ospolicyassignmentinstancefilterinventory


@dataclass_json
@dataclass
class OsPolicyAssignmentInstanceFilter:
    all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    exclusion_labels: Optional[List[ospolicyassignmentlabelset.OsPolicyAssignmentLabelSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusionLabels' }})
    inclusion_labels: Optional[List[ospolicyassignmentlabelset.OsPolicyAssignmentLabelSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclusionLabels' }})
    inventories: Optional[List[ospolicyassignmentinstancefilterinventory.OsPolicyAssignmentInstanceFilterInventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventories' }})
    
