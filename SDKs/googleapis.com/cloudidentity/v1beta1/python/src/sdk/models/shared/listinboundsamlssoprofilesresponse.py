from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inboundsamlssoprofile


@dataclass_json
@dataclass
class ListInboundSamlSsoProfilesResponse:
    inbound_saml_sso_profiles: Optional[List[inboundsamlssoprofile.InboundSamlSsoProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inboundSamlSsoProfiles' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
