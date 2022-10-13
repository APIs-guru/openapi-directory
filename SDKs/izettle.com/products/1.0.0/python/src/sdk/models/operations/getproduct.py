from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProductPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    product_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'productUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetProductSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProductSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductSecurity:
    option1: Optional[GetProductSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProductSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProductRequest:
    path_params: GetProductPathParams = field(default=None)
    headers: GetProductHeaders = field(default=None)
    security: GetProductSecurity = field(default=None)
    

@dataclass
class GetProductResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    product_response: Optional[shared.ProductResponse] = field(default=None)
    status_code: int = field(default=None)
    
