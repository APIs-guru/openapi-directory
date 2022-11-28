from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateServiceTemplatePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceTemplateRequest:
    path_params: CreateServiceTemplatePathParams = field()
    security: CreateServiceTemplateSecurity = field()
    request: Optional[shared.ErrorTemplate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateServiceTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    error_template: Optional[shared.ErrorTemplate] = field(default=None)
    
