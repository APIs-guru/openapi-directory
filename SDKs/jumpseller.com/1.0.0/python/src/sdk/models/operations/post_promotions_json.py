from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostPromotionsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPromotionsJSONRequest:
    query_params: PostPromotionsJSONQueryParams = field()
    request: shared.PromotionEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPromotionsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    promotion: Optional[shared.Promotion] = field(default=None)
    
