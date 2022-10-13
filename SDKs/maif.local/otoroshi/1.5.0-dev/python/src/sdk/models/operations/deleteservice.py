from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteServicePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceRequest:
    path_params: DeleteServicePathParams = field(default=None)
    security: DeleteServiceSecurity = field(default=None)
    

@dataclass
class DeleteServiceResponse:
    content_type: str = field(default=None)
    deleted: Optional[shared.Deleted] = field(default=None)
    status_code: int = field(default=None)
    
