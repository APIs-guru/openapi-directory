from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCustomersIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCustomersIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCustomersIDJSONRequest:
    path_params: PutCustomersIDJSONPathParams = field(default=None)
    query_params: PutCustomersIDJSONQueryParams = field(default=None)
    request: shared.CustomerWithPasswordNoID = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCustomersIDJSONResponse:
    content_type: str = field(default=None)
    customer: Optional[shared.Customer] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
