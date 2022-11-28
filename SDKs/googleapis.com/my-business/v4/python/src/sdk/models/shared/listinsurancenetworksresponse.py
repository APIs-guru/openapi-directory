from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInsuranceNetworksResponse:
    r"""ListInsuranceNetworksResponse
    Response message for InsuranceNetworkService.ListInsuranceNetworks
    """
    
    networks: Optional[List[InsuranceNetwork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
