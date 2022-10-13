from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudChannelV1ImportCustomerRequest:
    auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authToken' }})
    channel_partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelPartnerId' }})
    cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudIdentityId' }})
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    overwrite_if_exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwriteIfExists' }})
    
