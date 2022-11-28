from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InitializeHubResponse:
    r"""InitializeHubResponse
    Response message for the InitializeHub method.
    """
    
    service_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceIdentity') }})
    workload_identity_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityPool') }})
    
