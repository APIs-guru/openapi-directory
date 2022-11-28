from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteServicePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceRequest:
    path_params: DeleteServicePathParams = field()
    security: DeleteServiceSecurity = field()
    

@dataclass
class DeleteServiceResponse:
    content_type: str = field()
    status_code: int = field()
    deleted: Optional[shared.Deleted] = field(default=None)
    
