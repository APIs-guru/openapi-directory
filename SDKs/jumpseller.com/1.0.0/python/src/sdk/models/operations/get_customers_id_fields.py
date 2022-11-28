from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetCustomersIDFieldsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomersIDFieldsQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomersIDFieldsRequest:
    path_params: GetCustomersIDFieldsPathParams = field()
    query_params: GetCustomersIDFieldsQueryParams = field()
    

@dataclass
class GetCustomersIDFieldsResponse:
    content_type: str = field()
    status_code: int = field()
    customer_additional_fields: Optional[List[shared.CustomerAdditionalField]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
