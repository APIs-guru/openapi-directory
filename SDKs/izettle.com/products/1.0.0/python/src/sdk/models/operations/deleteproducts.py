from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeleteProductsPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsQueryParams:
    uuid: List[str] = field(metadata={'query_param': { 'field_name': 'uuid', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteProductsRequest:
    path_params: DeleteProductsPathParams = field()
    query_params: DeleteProductsQueryParams = field()
    security: DeleteProductsSecurity = field()
    

@dataclass
class DeleteProductsResponse:
    content_type: str = field()
    status_code: int = field()
    
