from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductsAPIFindQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductsAPIFindRequest:
    query_params: ProductsAPIFindQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProductsAPIFindResponse:
    content_type: str = field(default=None)
    products_api_find_200_application_json_one_of: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
