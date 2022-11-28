from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListHTTPRoutesResponse:
    r"""ListHTTPRoutesResponse
    Response returned by the ListHttpRoutes method.
    """
    
    http_routes: Optional[List[HTTPRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoutes') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
