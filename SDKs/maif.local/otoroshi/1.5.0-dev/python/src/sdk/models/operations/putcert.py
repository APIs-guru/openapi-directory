from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCertPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCertSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutCertRequest:
    path_params: PutCertPathParams = field(default=None)
    request: Optional[shared.Certificate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutCertSecurity = field(default=None)
    

@dataclass
class PutCertResponse:
    certificate: Optional[shared.Certificate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
