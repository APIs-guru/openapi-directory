from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCustomersIDFieldsFieldIDPathParams:
    field_id: int = field(metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCustomersIDFieldsFieldIDQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCustomersIDFieldsFieldIDRequest:
    path_params: PutCustomersIDFieldsFieldIDPathParams = field()
    query_params: PutCustomersIDFieldsFieldIDQueryParams = field()
    request: shared.CustomerAdditionalFieldEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCustomersIDFieldsFieldIDResponse:
    content_type: str = field()
    status_code: int = field()
    bad_params: Optional[Any] = field(default=None)
    customer_additional_field: Optional[shared.CustomerAdditionalField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
