from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import endpointpolicy


@dataclass_json
@dataclass
class ListEndpointPoliciesResponse:
    endpoint_policies: Optional[List[endpointpolicy.EndpointPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointPolicies' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
