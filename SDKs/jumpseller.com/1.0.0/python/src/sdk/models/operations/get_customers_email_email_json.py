from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCustomersEmailEmailJSONPathParams:
    email: str = field(metadata={'path_param': { 'field_name': 'email', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomersEmailEmailJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomersEmailEmailJSONRequest:
    path_params: GetCustomersEmailEmailJSONPathParams = field()
    query_params: GetCustomersEmailEmailJSONQueryParams = field()
    

@dataclass
class GetCustomersEmailEmailJSONResponse:
    content_type: str = field()
    status_code: int = field()
    customer: Optional[shared.Customer] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
