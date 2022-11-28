from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1TransferEntitlementsRequestInput:
    r"""GoogleCloudChannelV1TransferEntitlementsRequestInput
    Request message for CloudChannelService.TransferEntitlements.
    """
    
    auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authToken') }})
    entitlements: Optional[List[GoogleCloudChannelV1EntitlementInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlements') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
