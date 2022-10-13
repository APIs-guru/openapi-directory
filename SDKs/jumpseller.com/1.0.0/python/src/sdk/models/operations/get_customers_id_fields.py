from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetCustomersIDFieldsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomersIDFieldsQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomersIDFieldsRequest:
    path_params: GetCustomersIDFieldsPathParams = field(default=None)
    query_params: GetCustomersIDFieldsQueryParams = field(default=None)
    

@dataclass
class GetCustomersIDFieldsResponse:
    content_type: str = field(default=None)
    customer_additional_fields: Optional[List[shared.CustomerAdditionalField]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
