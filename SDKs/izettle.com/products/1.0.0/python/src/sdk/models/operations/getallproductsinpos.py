from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllProductsInPosPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllProductsInPosSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllProductsInPosRequest:
    path_params: GetAllProductsInPosPathParams = field()
    security: GetAllProductsInPosSecurity = field()
    

@dataclass
class GetAllProductsInPosResponse:
    content_type: str = field()
    status_code: int = field()
    product_responses: Optional[List[shared.ProductResponse]] = field(default=None)
    
