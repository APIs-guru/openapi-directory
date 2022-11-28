from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCertPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCertSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutCertRequest:
    path_params: PutCertPathParams = field()
    security: PutCertSecurity = field()
    request: Optional[shared.Certificate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCertResponse:
    content_type: str = field()
    status_code: int = field()
    certificate: Optional[shared.Certificate] = field(default=None)
    
