from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdditionalPartPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdditionalPartQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdditionalPartSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAdditionalPartRequest:
    path_params: GetAdditionalPartPathParams = field(default=None)
    query_params: GetAdditionalPartQueryParams = field(default=None)
    security: GetAdditionalPartSecurity = field(default=None)
    

@dataclass
class GetAdditionalPartResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
