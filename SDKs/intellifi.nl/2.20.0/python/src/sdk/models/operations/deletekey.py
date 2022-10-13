from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteKeyPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteKeySecurity:
    cookie_sid: shared.SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class DeleteKeyRequest:
    path_params: DeleteKeyPathParams = field(default=None)
    security: DeleteKeySecurity = field(default=None)
    

@dataclass
class DeleteKeyResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
