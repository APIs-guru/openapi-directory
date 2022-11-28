from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServiceTemplatePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceTemplateRequest:
    path_params: ServiceTemplatePathParams = field()
    security: ServiceTemplateSecurity = field()
    

@dataclass
class ServiceTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    error_template: Optional[shared.ErrorTemplate] = field(default=None)
    
