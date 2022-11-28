from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListConnectionsResponse:
    r"""GoogleCloudIntegrationsV1alphaListConnectionsResponse
    Response containing Connections listed by region.
    """
    
    connections: Optional[List[GoogleCloudConnectorsV1Connection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
