from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSpecialFeaturesPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecialFeaturesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSpecialFeaturesRequest:
    path_params: GetSpecialFeaturesPathParams = field(default=None)
    security: GetSpecialFeaturesSecurity = field(default=None)
    

@dataclass
class GetSpecialFeaturesResponse:
    base_item_dtos: Optional[List[shared.BaseItemDto]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
