from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCustomersIDFieldsFieldIDPathParams:
    field_id: int = field(metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomersIDFieldsFieldIDQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomersIDFieldsFieldIDRequest:
    path_params: GetCustomersIDFieldsFieldIDPathParams = field()
    query_params: GetCustomersIDFieldsFieldIDQueryParams = field()
    

@dataclass
class GetCustomersIDFieldsFieldIDResponse:
    content_type: str = field()
    status_code: int = field()
    customer_additional_field: Optional[shared.CustomerAdditionalField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
