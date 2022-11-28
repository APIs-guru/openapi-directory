from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsPolicyAssignmentInstanceFilter:
    r"""OsPolicyAssignmentInstanceFilter
    Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
    """
    
    all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    exclusion_labels: Optional[List[OsPolicyAssignmentLabelSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionLabels') }})
    inclusion_labels: Optional[List[OsPolicyAssignmentLabelSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusionLabels') }})
    inventories: Optional[List[OsPolicyAssignmentInstanceFilterInventory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventories') }})
    
