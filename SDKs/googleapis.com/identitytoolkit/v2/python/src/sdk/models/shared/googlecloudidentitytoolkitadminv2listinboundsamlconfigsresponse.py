from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2inboundsamlconfig


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse:
    inbound_saml_configs: Optional[List[googlecloudidentitytoolkitadminv2inboundsamlconfig.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inboundSamlConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
