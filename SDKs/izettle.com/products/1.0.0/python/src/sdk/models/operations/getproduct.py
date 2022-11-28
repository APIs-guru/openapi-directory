from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProductPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    product_uuid: str = field(metadata={'path_param': { 'field_name': 'productUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductRequest:
    headers: GetProductHeaders = field()
    path_params: GetProductPathParams = field()
    security: GetProductSecurity = field()
    

@dataclass
class GetProductResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    product_response: Optional[shared.ProductResponse] = field(default=None)
    
