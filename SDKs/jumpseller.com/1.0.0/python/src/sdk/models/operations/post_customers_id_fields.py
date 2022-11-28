from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostCustomersIDFieldsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCustomersIDFieldsQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomersIDFieldsRequest:
    path_params: PostCustomersIDFieldsPathParams = field()
    query_params: PostCustomersIDFieldsQueryParams = field()
    request: shared.CustomerAdditionalFieldEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomersIDFieldsResponse:
    content_type: str = field()
    status_code: int = field()
    customer_additional_field: Optional[shared.CustomerAdditionalField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
