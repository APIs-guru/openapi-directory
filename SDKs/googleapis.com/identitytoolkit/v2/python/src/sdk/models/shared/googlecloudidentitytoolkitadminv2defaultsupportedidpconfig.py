from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2applesigninconfig


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig:
    apple_sign_in_config: Optional[googlecloudidentitytoolkitadminv2applesigninconfig.GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appleSignInConfig' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
