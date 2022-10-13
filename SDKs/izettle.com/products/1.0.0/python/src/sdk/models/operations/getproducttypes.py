from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductTypesPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductTypesSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProductTypesSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductTypesSecurity:
    option1: Optional[GetProductTypesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProductTypesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProductTypesRequest:
    path_params: GetProductTypesPathParams = field(default=None)
    security: GetProductTypesSecurity = field(default=None)
    

@dataclass
class GetProductTypesResponse:
    category_response: Optional[shared.CategoryResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
