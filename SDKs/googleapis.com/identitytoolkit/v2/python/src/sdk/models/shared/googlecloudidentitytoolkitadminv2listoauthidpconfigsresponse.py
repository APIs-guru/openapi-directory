from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse
    Response for ListOAuthIdpConfigs
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    oauth_idp_configs: Optional[List[GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthIdpConfigs') }})
    
