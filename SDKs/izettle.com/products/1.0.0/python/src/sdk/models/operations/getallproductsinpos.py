from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllProductsInPosPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllProductsInPosSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllProductsInPosSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllProductsInPosSecurity:
    option1: Optional[GetAllProductsInPosSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAllProductsInPosSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAllProductsInPosRequest:
    path_params: GetAllProductsInPosPathParams = field(default=None)
    security: GetAllProductsInPosSecurity = field(default=None)
    

@dataclass
class GetAllProductsInPosResponse:
    content_type: str = field(default=None)
    product_responses: Optional[List[shared.ProductResponse]] = field(default=None)
    status_code: int = field(default=None)
    
