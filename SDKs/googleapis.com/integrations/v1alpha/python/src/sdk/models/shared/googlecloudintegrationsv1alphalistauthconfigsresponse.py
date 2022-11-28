from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListAuthConfigsResponse:
    r"""GoogleCloudIntegrationsV1alphaListAuthConfigsResponse
    Response to list AuthConfigs.
    """
    
    auth_configs: Optional[List[GoogleCloudIntegrationsV1alphaAuthConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authConfigs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
