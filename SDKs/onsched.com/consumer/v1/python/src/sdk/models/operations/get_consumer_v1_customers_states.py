from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersStatesQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1CustomersStatesRequest:
    query_params: GetConsumerV1CustomersStatesQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1CustomersStatesResponse:
    content_type: str = field(default=None)
    state_view_models: Optional[List[shared.StateViewModel]] = field(default=None)
    status_code: int = field(default=None)
    
