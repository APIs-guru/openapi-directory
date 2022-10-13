from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteServiceTemplatePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceTemplateRequest:
    path_params: DeleteServiceTemplatePathParams = field(default=None)
    security: DeleteServiceTemplateSecurity = field(default=None)
    

@dataclass
class DeleteServiceTemplateResponse:
    content_type: str = field(default=None)
    deleted: Optional[shared.Deleted] = field(default=None)
    status_code: int = field(default=None)
    
