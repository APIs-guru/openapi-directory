from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTaxesIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaxesIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTaxesIDJSONRequest:
    path_params: GetTaxesIDJSONPathParams = field()
    query_params: GetTaxesIDJSONQueryParams = field()
    

@dataclass
class GetTaxesIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    tax: Optional[shared.Tax] = field(default=None)
    
