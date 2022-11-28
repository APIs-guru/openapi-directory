from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListSuspensionsResponse:
    r"""GoogleCloudIntegrationsV1alphaListSuspensionsResponse
    Response for Suspensions.ListSuspensions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    suspensions: Optional[List[GoogleCloudIntegrationsV1alphaSuspension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensions') }})
    
