from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateProductSlugPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProductSlugSecurityOption1:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateProductSlugSecurityOption2:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateProductSlugSecurity:
    option1: Optional[CreateProductSlugSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateProductSlugSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateProductSlugRequest:
    path_params: CreateProductSlugPathParams = field(default=None)
    request: shared.CreateSlugRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProductSlugSecurity = field(default=None)
    

@dataclass
class CreateProductSlugResponse:
    content_type: str = field(default=None)
    slug_response: Optional[shared.SlugResponse] = field(default=None)
    status_code: int = field(default=None)
    
