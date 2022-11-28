from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoriesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoriesJSONRequest:
    query_params: GetCategoriesJSONQueryParams = field()
    

@dataclass
class GetCategoriesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    category: Optional[shared.Category] = field(default=None)
    
