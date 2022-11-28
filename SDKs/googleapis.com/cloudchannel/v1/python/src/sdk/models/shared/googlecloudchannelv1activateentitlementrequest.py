from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudChannelV1ActivateEntitlementRequest:
    r"""GoogleCloudChannelV1ActivateEntitlementRequest
    Request message for CloudChannelService.ActivateEntitlement.
    """
    
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
