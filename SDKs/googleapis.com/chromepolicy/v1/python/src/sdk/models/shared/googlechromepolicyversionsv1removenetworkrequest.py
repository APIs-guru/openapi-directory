from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1RemoveNetworkRequest:
    r"""GoogleChromePolicyVersionsV1RemoveNetworkRequest
    Request object for removing a network
    """
    
    network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkId') }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResource') }})
    
