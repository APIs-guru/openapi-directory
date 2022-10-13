from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostCustomersJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomersJSONRequest:
    query_params: PostCustomersJSONQueryParams = field(default=None)
    request: shared.CustomerWithPasswordNoID = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomersJSONResponse:
    content_type: str = field(default=None)
    customer: Optional[shared.Customer] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
