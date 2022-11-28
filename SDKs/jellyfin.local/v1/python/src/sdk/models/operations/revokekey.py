from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RevokeKeyPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeKeySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RevokeKeyRequest:
    path_params: RevokeKeyPathParams = field()
    security: RevokeKeySecurity = field()
    

@dataclass
class RevokeKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
