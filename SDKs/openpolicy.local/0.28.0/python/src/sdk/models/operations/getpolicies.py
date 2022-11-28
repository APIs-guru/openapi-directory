from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPoliciesQueryParams:
    pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPoliciesRequest:
    query_params: GetPoliciesQueryParams = field()
    

@dataclass
class GetPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    two_hundred_result: Optional[shared.TwoHundredResult] = field(default=None)
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    
