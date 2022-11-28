from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteKeyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteKeySecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class DeleteKeyRequest:
    path_params: DeleteKeyPathParams = field()
    security: DeleteKeySecurity = field()
    

@dataclass
class DeleteKeyResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
