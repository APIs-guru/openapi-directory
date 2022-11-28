from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIKeyPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeyRequest:
    path_params: APIKeyPathParams = field()
    security: APIKeySecurity = field()
    

@dataclass
class APIKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
