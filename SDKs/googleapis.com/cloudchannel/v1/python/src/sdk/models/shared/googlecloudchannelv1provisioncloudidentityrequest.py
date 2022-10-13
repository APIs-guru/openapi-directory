from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1cloudidentityinfo
from . import googlecloudchannelv1adminuser


@dataclass_json
@dataclass
class GoogleCloudChannelV1ProvisionCloudIdentityRequest:
    cloud_identity_info: Optional[googlecloudchannelv1cloudidentityinfo.GoogleCloudChannelV1CloudIdentityInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudIdentityInfo' }})
    user: Optional[googlecloudchannelv1adminuser.GoogleCloudChannelV1AdminUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
