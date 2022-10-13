from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CountAllProductsPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CountAllProductsSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CountAllProductsSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CountAllProductsSecurity:
    option1: Optional[CountAllProductsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CountAllProductsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CountAllProductsRequest:
    path_params: CountAllProductsPathParams = field(default=None)
    security: CountAllProductsSecurity = field(default=None)
    

@dataclass
class CountAllProductsResponse:
    content_type: str = field(default=None)
    product_count_responses: Optional[List[shared.ProductCountResponse]] = field(default=None)
    status_code: int = field(default=None)
    
