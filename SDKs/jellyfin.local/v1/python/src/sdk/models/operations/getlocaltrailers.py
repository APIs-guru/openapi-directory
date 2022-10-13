from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLocalTrailersPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLocalTrailersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLocalTrailersRequest:
    path_params: GetLocalTrailersPathParams = field(default=None)
    security: GetLocalTrailersSecurity = field(default=None)
    

@dataclass
class GetLocalTrailersResponse:
    base_item_dtos: Optional[List[shared.BaseItemDto]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
