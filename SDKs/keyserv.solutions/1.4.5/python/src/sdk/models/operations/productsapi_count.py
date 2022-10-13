from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductsAPICountRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProductsAPICountResponse:
    content_type: str = field(default=None)
    products_api_count_200_application_json_one_of: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
