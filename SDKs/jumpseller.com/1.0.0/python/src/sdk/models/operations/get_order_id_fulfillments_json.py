from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetOrderIDFulfillmentsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrderIDFulfillmentsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrderIDFulfillmentsJSONRequest:
    path_params: GetOrderIDFulfillmentsJSONPathParams = field(default=None)
    query_params: GetOrderIDFulfillmentsJSONQueryParams = field(default=None)
    

@dataclass
class GetOrderIDFulfillmentsJSONResponse:
    content_type: str = field(default=None)
    fulfillments: Optional[List[shared.Fulfillment]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
