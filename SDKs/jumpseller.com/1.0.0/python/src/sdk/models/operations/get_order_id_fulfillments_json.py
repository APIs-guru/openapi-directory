from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetOrderIDFulfillmentsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrderIDFulfillmentsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrderIDFulfillmentsJSONRequest:
    path_params: GetOrderIDFulfillmentsJSONPathParams = field()
    query_params: GetOrderIDFulfillmentsJSONQueryParams = field()
    

@dataclass
class GetOrderIDFulfillmentsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    fulfillments: Optional[List[shared.Fulfillment]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
