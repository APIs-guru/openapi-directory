from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2oauthidpconfig


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    oauth_idp_configs: Optional[List[googlecloudidentitytoolkitadminv2oauthidpconfig.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthIdpConfigs' }})
    
