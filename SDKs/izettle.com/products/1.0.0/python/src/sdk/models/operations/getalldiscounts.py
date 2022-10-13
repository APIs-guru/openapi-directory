from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllDiscountsPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllDiscountsSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllDiscountsSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllDiscountsSecurity:
    option1: Optional[GetAllDiscountsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAllDiscountsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAllDiscountsRequest:
    path_params: GetAllDiscountsPathParams = field(default=None)
    security: GetAllDiscountsSecurity = field(default=None)
    

@dataclass
class GetAllDiscountsResponse:
    content_type: str = field(default=None)
    discount_responses: Optional[List[shared.DiscountResponse]] = field(default=None)
    status_code: int = field(default=None)
    
