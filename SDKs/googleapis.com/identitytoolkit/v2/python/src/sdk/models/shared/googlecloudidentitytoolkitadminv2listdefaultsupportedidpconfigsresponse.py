from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2defaultsupportedidpconfig


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse:
    default_supported_idp_configs: Optional[List[googlecloudidentitytoolkitadminv2defaultsupportedidpconfig.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSupportedIdpConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
