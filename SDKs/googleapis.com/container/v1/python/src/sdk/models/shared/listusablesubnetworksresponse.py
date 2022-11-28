from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUsableSubnetworksResponse:
    r"""ListUsableSubnetworksResponse
    ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    subnetworks: Optional[List[UsableSubnetwork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetworks') }})
    
