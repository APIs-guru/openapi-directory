from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2defaultsupportedidp


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse:
    default_supported_idps: Optional[List[googlecloudidentitytoolkitadminv2defaultsupportedidp.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSupportedIdps' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
