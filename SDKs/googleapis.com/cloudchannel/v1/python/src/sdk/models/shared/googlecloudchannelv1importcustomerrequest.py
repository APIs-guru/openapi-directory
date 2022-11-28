from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudChannelV1ImportCustomerRequest:
    r"""GoogleCloudChannelV1ImportCustomerRequest
    Request message for CloudChannelService.ImportCustomer
    """
    
    auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authToken') }})
    channel_partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerId') }})
    cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityId') }})
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    overwrite_if_exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwriteIfExists') }})
    
