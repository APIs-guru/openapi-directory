from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdditionalPartPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdditionalPartQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdditionalPartSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAdditionalPartRequest:
    path_params: GetAdditionalPartPathParams = field()
    query_params: GetAdditionalPartQueryParams = field()
    security: GetAdditionalPartSecurity = field()
    

@dataclass
class GetAdditionalPartResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    
