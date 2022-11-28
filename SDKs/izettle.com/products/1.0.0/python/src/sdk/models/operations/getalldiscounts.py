from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllDiscountsPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllDiscountsSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllDiscountsRequest:
    path_params: GetAllDiscountsPathParams = field()
    security: GetAllDiscountsSecurity = field()
    

@dataclass
class GetAllDiscountsResponse:
    content_type: str = field()
    status_code: int = field()
    discount_responses: Optional[List[shared.DiscountResponse]] = field(default=None)
    
