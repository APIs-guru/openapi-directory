from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoriesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoriesJSONRequest:
    query_params: GetCategoriesJSONQueryParams = field(default=None)
    

@dataclass
class GetCategoriesJSONResponse:
    category: Optional[shared.Category] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
