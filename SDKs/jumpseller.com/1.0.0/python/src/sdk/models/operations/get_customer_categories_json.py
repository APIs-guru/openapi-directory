from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCustomerCategoriesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomerCategoriesJSONRequest:
    query_params: GetCustomerCategoriesJSONQueryParams = field(default=None)
    

@dataclass
class GetCustomerCategoriesJSONResponse:
    content_type: str = field(default=None)
    customer_categories: Optional[List[shared.CustomerCategory]] = field(default=None)
    status_code: int = field(default=None)
    
