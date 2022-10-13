from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCertPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCertSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCertRequest:
    path_params: DeleteCertPathParams = field(default=None)
    security: DeleteCertSecurity = field(default=None)
    

@dataclass
class DeleteCertResponse:
    content_type: str = field(default=None)
    deleted: Optional[shared.Deleted] = field(default=None)
    status_code: int = field(default=None)
    
