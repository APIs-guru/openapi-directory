from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billingassignment


@dataclass_json
@dataclass
class BillingAssignmentsListResponse:
    billing_assignments: Optional[List[billingassignment.BillingAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingAssignments' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
