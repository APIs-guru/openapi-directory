from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCustomersIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomersIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomersIDJSONRequest:
    path_params: GetCustomersIDJSONPathParams = field()
    query_params: GetCustomersIDJSONQueryParams = field()
    

@dataclass
class GetCustomersIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    customer: Optional[shared.Customer] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
