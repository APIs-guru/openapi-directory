from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateServiceTemplatePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceTemplateRequest:
    path_params: UpdateServiceTemplatePathParams = field(default=None)
    request: Optional[shared.ErrorTemplate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateServiceTemplateSecurity = field(default=None)
    

@dataclass
class UpdateServiceTemplateResponse:
    content_type: str = field(default=None)
    error_template: Optional[shared.ErrorTemplate] = field(default=None)
    status_code: int = field(default=None)
    
