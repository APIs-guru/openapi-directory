from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInboundSamlSsoProfilesResponse:
    r"""ListInboundSamlSsoProfilesResponse
    Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.
    """
    
    inbound_saml_sso_profiles: Optional[List[InboundSamlSsoProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundSamlSsoProfiles') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
