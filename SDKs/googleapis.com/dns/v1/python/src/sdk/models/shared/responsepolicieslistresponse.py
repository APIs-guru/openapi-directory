from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responseheader
from . import responsepolicy


@dataclass_json
@dataclass
class ResponsePoliciesListResponse:
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    response_policies: Optional[List[responsepolicy.ResponsePolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePolicies' }})
    
