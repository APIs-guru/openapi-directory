from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateProductPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProductQueryParams:
    return_entity: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnEntity', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProductSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateProductSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateProductSecurity:
    option1: Optional[CreateProductSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateProductSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateProductRequest:
    path_params: CreateProductPathParams = field(default=None)
    query_params: CreateProductQueryParams = field(default=None)
    request: shared.ProductCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProductSecurity = field(default=None)
    

@dataclass
class CreateProductResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    product_response: Optional[shared.ProductResponse] = field(default=None)
    status_code: int = field(default=None)
    
