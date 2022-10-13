from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostCustomersIDFieldsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCustomersIDFieldsQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomersIDFieldsRequest:
    path_params: PostCustomersIDFieldsPathParams = field(default=None)
    query_params: PostCustomersIDFieldsQueryParams = field(default=None)
    request: shared.CustomerAdditionalFieldEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomersIDFieldsResponse:
    content_type: str = field(default=None)
    customer_additional_field: Optional[shared.CustomerAdditionalField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
