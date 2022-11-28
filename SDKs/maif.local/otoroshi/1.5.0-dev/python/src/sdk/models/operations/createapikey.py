from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAPIKeyPathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAPIKeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAPIKeyRequest:
    path_params: CreateAPIKeyPathParams = field()
    security: CreateAPIKeySecurity = field()
    request: Optional[shared.APIKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAPIKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
