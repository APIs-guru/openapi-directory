from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteServiceTemplatePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceTemplateRequest:
    path_params: DeleteServiceTemplatePathParams = field()
    security: DeleteServiceTemplateSecurity = field()
    

@dataclass
class DeleteServiceTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    deleted: Optional[shared.Deleted] = field(default=None)
    
