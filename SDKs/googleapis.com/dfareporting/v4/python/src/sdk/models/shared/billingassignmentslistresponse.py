from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BillingAssignmentsListResponse:
    r"""BillingAssignmentsListResponse
    Billing assignment List Response
    """
    
    billing_assignments: Optional[List[BillingAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingAssignments') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
