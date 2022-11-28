from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGatewaysResponse:
    r"""ListGatewaysResponse
    Response returned by the ListGateways method.
    """
    
    gateways: Optional[List[Gateway]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateways') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
