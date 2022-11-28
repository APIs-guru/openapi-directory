from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OneCertPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OneCertSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class OneCertRequest:
    path_params: OneCertPathParams = field()
    security: OneCertSecurity = field()
    

@dataclass
class OneCertResponse:
    content_type: str = field()
    status_code: int = field()
    certificate: Optional[shared.Certificate] = field(default=None)
    
