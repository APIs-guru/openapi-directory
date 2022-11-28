from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductTypesPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductTypesSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductTypesRequest:
    path_params: GetProductTypesPathParams = field()
    security: GetProductTypesSecurity = field()
    

@dataclass
class GetProductTypesResponse:
    content_type: str = field()
    status_code: int = field()
    category_response: Optional[shared.CategoryResponse] = field(default=None)
    
