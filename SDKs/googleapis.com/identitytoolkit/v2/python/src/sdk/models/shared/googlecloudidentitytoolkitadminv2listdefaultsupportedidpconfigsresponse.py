from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse
    Response for DefaultSupportedIdpConfigs
    """
    
    default_supported_idp_configs: Optional[List[GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSupportedIdpConfigs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
