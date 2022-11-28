from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStoreInfoJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStoreInfoJSONRequest:
    query_params: GetStoreInfoJSONQueryParams = field()
    

@dataclass
class GetStoreInfoJSONResponse:
    content_type: str = field()
    status_code: int = field()
    store: Optional[shared.Store] = field(default=None)
    
