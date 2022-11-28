from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTLSRoutesResponse:
    r"""ListTLSRoutesResponse
    Response returned by the ListTlsRoutes method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tls_routes: Optional[List[TLSRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsRoutes') }})
    
