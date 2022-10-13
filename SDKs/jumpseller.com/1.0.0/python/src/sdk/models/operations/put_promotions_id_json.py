from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutPromotionsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPromotionsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutPromotionsIDJSONRequest:
    path_params: PutPromotionsIDJSONPathParams = field(default=None)
    query_params: PutPromotionsIDJSONQueryParams = field(default=None)
    request: shared.PromotionEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPromotionsIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    promotion: Optional[shared.Promotion] = field(default=None)
    status_code: int = field(default=None)
    
