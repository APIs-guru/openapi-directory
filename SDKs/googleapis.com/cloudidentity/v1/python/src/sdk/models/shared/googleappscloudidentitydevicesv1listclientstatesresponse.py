from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCloudidentityDevicesV1ListClientStatesResponse:
    r"""GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
    Response message that is returned in ListClientStates.
    """
    
    client_states: Optional[List[GoogleAppsCloudidentityDevicesV1ClientState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientStates') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
