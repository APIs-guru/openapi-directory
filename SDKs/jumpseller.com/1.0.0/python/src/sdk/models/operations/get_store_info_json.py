from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStoreInfoJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStoreInfoJSONRequest:
    query_params: GetStoreInfoJSONQueryParams = field(default=None)
    

@dataclass
class GetStoreInfoJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    store: Optional[shared.Store] = field(default=None)
    
