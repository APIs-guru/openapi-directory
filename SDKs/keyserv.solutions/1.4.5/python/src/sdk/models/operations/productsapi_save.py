from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductsAPISaveRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProductsAPISaveResponse:
    content_type: str = field(default=None)
    products_api_save_201_application_json_one_of: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
