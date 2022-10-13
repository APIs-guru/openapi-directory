from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OneCertPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OneCertSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class OneCertRequest:
    path_params: OneCertPathParams = field(default=None)
    security: OneCertSecurity = field(default=None)
    

@dataclass
class OneCertResponse:
    certificate: Optional[shared.Certificate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
