from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteProductPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    product_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'productUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteProductSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteProductSecurity:
    option1: Optional[DeleteProductSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteProductSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteProductRequest:
    path_params: DeleteProductPathParams = field(default=None)
    security: DeleteProductSecurity = field(default=None)
    

@dataclass
class DeleteProductResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
