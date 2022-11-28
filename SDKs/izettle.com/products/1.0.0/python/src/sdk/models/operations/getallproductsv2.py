from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllProductsV2PathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllProductsV2QueryParams:
    sort: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllProductsV2Security:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllProductsV2Request:
    path_params: GetAllProductsV2PathParams = field()
    query_params: GetAllProductsV2QueryParams = field()
    security: GetAllProductsV2Security = field()
    

@dataclass
class GetAllProductsV2Response:
    content_type: str = field()
    status_code: int = field()
    product_responses: Optional[List[shared.ProductResponse]] = field(default=None)
    
