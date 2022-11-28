from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListProjectBillingInfoResponse:
    r"""ListProjectBillingInfoResponse
    Request message for `ListProjectBillingInfoResponse`.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    project_billing_info: Optional[List[ProjectBillingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectBillingInfo') }})
    
