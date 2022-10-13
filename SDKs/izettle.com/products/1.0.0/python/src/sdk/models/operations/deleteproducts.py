from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DeleteProductsPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsQueryParams:
    uuid: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'uuid', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteProductsSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteProductsSecurity:
    option1: Optional[DeleteProductsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteProductsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteProductsRequest:
    path_params: DeleteProductsPathParams = field(default=None)
    query_params: DeleteProductsQueryParams = field(default=None)
    security: DeleteProductsSecurity = field(default=None)
    

@dataclass
class DeleteProductsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
