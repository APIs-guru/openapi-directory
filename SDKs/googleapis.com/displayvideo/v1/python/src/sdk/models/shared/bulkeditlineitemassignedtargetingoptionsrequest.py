from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkEditLineItemAssignedTargetingOptionsRequestInput:
    r"""BulkEditLineItemAssignedTargetingOptionsRequestInput
    Request message for BulkEditLineItemAssignedTargetingOptions.
    """
    
    create_requests: Optional[List[CreateAssignedTargetingOptionsRequestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createRequests') }})
    delete_requests: Optional[List[DeleteAssignedTargetingOptionsRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteRequests') }})
    
