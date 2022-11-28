from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInstanceOsPoliciesCompliancesResponse:
    r"""ListInstanceOsPoliciesCompliancesResponse
    A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
    """
    
    instance_os_policies_compliances: Optional[List[InstanceOsPoliciesCompliance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceOsPoliciesCompliances') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
