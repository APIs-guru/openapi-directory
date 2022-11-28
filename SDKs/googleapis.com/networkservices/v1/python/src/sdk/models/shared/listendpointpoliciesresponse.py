from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEndpointPoliciesResponse:
    r"""ListEndpointPoliciesResponse
    Response returned by the ListEndpointPolicies method.
    """
    
    endpoint_policies: Optional[List[EndpointPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointPolicies') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
