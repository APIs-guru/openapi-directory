from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest:
    r"""GoogleMapsPlayablelocationsV3LogPlayerReportsRequest
    A request for logging your player's bad location reports.
    """
    
    client_info: Optional[GoogleMapsUnityClientInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientInfo') }})
    player_reports: Optional[List[GoogleMapsPlayablelocationsV3PlayerReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerReports') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
