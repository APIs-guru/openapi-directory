from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ProductsAPIListQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductsAPIListRequest:
    query_params: ProductsAPIListQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProductsAPIListResponse:
    content_type: str = field()
    status_code: int = field()
    product_views: Optional[List[shared.ProductView]] = field(default=None)
    
