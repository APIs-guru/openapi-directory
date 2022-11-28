from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutPromotionsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPromotionsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutPromotionsIDJSONRequest:
    path_params: PutPromotionsIDJSONPathParams = field()
    query_params: PutPromotionsIDJSONQueryParams = field()
    request: shared.PromotionEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPromotionsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    promotion: Optional[shared.Promotion] = field(default=None)
    
