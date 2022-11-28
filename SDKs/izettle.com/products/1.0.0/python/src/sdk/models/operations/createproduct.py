from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateProductPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProductQueryParams:
    return_entity: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnEntity', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProductSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateProductRequest:
    path_params: CreateProductPathParams = field()
    query_params: CreateProductQueryParams = field()
    request: shared.ProductCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProductSecurity = field()
    

@dataclass
class CreateProductResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    product_response: Optional[shared.ProductResponse] = field(default=None)
    
