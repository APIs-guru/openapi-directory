from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CountAllProductsPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CountAllProductsSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CountAllProductsRequest:
    path_params: CountAllProductsPathParams = field()
    security: CountAllProductsSecurity = field()
    

@dataclass
class CountAllProductsResponse:
    content_type: str = field()
    status_code: int = field()
    product_count_responses: Optional[List[shared.ProductCountResponse]] = field(default=None)
    
