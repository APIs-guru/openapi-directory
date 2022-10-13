from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2oauthresponsetype


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    response_type: Optional[googlecloudidentitytoolkitadminv2oauthresponsetype.GoogleCloudIdentitytoolkitAdminV2OAuthResponseType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseType' }})
    
