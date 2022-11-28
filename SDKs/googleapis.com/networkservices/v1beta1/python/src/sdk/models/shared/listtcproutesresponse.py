from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTCPRoutesResponse:
    r"""ListTCPRoutesResponse
    Response returned by the ListTcpRoutes method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tcp_routes: Optional[List[TCPRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpRoutes') }})
    
