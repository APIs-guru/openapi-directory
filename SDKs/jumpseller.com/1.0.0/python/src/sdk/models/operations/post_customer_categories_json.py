from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostCustomerCategoriesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomerCategoriesJSONRequest:
    query_params: PostCustomerCategoriesJSONQueryParams = field(default=None)
    request: shared.CustomerCategoryEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomerCategoriesJSONResponse:
    content_type: str = field(default=None)
    customer_category: Optional[shared.CustomerCategory] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
