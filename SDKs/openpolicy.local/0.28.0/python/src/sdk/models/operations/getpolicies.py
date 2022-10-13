from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPoliciesQueryParams:
    pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPoliciesRequest:
    query_params: GetPoliciesQueryParams = field(default=None)
    

@dataclass
class GetPoliciesResponse:
    two_hundred_result: Optional[shared.TwoHundredResult] = field(default=None)
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
