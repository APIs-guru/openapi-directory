from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllProductsV2PathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllProductsV2QueryParams:
    sort: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllProductsV2SecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllProductsV2SecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllProductsV2Security:
    option1: Optional[GetAllProductsV2SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAllProductsV2SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAllProductsV2Request:
    path_params: GetAllProductsV2PathParams = field(default=None)
    query_params: GetAllProductsV2QueryParams = field(default=None)
    security: GetAllProductsV2Security = field(default=None)
    

@dataclass
class GetAllProductsV2Response:
    content_type: str = field(default=None)
    product_responses: Optional[List[shared.ProductResponse]] = field(default=None)
    status_code: int = field(default=None)
    
