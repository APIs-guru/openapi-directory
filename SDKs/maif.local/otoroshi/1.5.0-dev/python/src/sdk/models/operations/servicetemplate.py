from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServiceTemplatePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceTemplateRequest:
    path_params: ServiceTemplatePathParams = field(default=None)
    security: ServiceTemplateSecurity = field(default=None)
    

@dataclass
class ServiceTemplateResponse:
    content_type: str = field(default=None)
    error_template: Optional[shared.ErrorTemplate] = field(default=None)
    status_code: int = field(default=None)
    
