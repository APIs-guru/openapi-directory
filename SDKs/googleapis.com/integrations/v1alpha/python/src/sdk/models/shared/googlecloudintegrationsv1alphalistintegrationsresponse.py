from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListIntegrationsResponse:
    r"""GoogleCloudIntegrationsV1alphaListIntegrationsResponse
    Response for ListIntegrations.
    """
    
    integrations: Optional[List[GoogleCloudIntegrationsV1alphaIntegration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
