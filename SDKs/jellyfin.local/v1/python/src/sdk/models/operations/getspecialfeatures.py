from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSpecialFeaturesPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecialFeaturesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSpecialFeaturesRequest:
    path_params: GetSpecialFeaturesPathParams = field()
    security: GetSpecialFeaturesSecurity = field()
    

@dataclass
class GetSpecialFeaturesResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dtos: Optional[List[shared.BaseItemDto]] = field(default=None)
    
