from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCategoriesPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCategoriesSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCategoriesRequest:
    path_params: CreateCategoriesPathParams = field()
    request: shared.CategoryRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCategoriesSecurity = field()
    

@dataclass
class CreateCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    
