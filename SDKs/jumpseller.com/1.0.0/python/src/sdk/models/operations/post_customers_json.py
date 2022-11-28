from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostCustomersJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomersJSONRequest:
    query_params: PostCustomersJSONQueryParams = field()
    request: shared.CustomerWithPasswordNoID = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomersJSONResponse:
    content_type: str = field()
    status_code: int = field()
    customer: Optional[shared.Customer] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
