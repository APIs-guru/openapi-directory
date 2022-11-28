from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3LogImpressionsRequest:
    r"""GoogleMapsPlayablelocationsV3LogImpressionsRequest
    A request for logging impressions.
    """
    
    client_info: Optional[GoogleMapsUnityClientInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientInfo') }})
    impressions: Optional[List[GoogleMapsPlayablelocationsV3Impression]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressions') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
