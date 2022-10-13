from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCategoriesPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCategoriesSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateCategoriesSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCategoriesSecurity:
    option1: Optional[CreateCategoriesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateCategoriesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateCategoriesRequest:
    path_params: CreateCategoriesPathParams = field(default=None)
    request: shared.CategoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCategoriesSecurity = field(default=None)
    

@dataclass
class CreateCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
