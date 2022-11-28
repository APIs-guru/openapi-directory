from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1CreateEntitlementRequestInput:
    r"""GoogleCloudChannelV1CreateEntitlementRequestInput
    Request message for CloudChannelService.CreateEntitlement
    """
    
    entitlement: Optional[GoogleCloudChannelV1EntitlementInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlement') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
