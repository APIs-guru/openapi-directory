from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAPIKeyPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAPIKeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAPIKeyRequest:
    path_params: CreateAPIKeyPathParams = field(default=None)
    request: Optional[shared.APIKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAPIKeySecurity = field(default=None)
    

@dataclass
class CreateAPIKeyResponse:
    api_key: Optional[shared.APIKey] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
