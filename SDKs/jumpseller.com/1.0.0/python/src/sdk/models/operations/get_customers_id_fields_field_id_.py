from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCustomersIDFieldsFieldIDPathParams:
    field_id: int = field(default=None, metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomersIDFieldsFieldIDQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomersIDFieldsFieldIDRequest:
    path_params: GetCustomersIDFieldsFieldIDPathParams = field(default=None)
    query_params: GetCustomersIDFieldsFieldIDQueryParams = field(default=None)
    

@dataclass
class GetCustomersIDFieldsFieldIDResponse:
    content_type: str = field(default=None)
    customer_additional_field: Optional[shared.CustomerAdditionalField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
