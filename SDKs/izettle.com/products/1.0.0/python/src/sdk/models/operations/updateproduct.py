from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateProductPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    product_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'productUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProductHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateProductSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateProductSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateProductSecurity:
    option1: Optional[UpdateProductSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateProductSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateProductRequest:
    path_params: UpdateProductPathParams = field(default=None)
    headers: UpdateProductHeaders = field(default=None)
    request: shared.ProductUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateProductSecurity = field(default=None)
    

@dataclass
class UpdateProductResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
