from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse
    Response for ListInboundSamlConfigs
    """
    
    inbound_saml_configs: Optional[List[GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundSamlConfigs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
