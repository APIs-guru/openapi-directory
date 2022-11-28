from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateProductSlugPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProductSlugSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateProductSlugRequest:
    path_params: CreateProductSlugPathParams = field()
    request: shared.CreateSlugRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProductSlugSecurity = field()
    

@dataclass
class CreateProductSlugResponse:
    content_type: str = field()
    status_code: int = field()
    slug_response: Optional[shared.SlugResponse] = field(default=None)
    
