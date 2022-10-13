from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetFulfillmentsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFulfillmentsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFulfillmentsIDJSONRequest:
    path_params: GetFulfillmentsIDJSONPathParams = field(default=None)
    query_params: GetFulfillmentsIDJSONQueryParams = field(default=None)
    

@dataclass
class GetFulfillmentsIDJSONResponse:
    content_type: str = field(default=None)
    fulfillment: Optional[shared.Fulfillment] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
