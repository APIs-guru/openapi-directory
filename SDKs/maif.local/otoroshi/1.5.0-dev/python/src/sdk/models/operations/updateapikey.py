from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAPIKeyPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAPIKeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAPIKeyRequest:
    path_params: UpdateAPIKeyPathParams = field(default=None)
    request: Optional[shared.APIKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAPIKeySecurity = field(default=None)
    

@dataclass
class UpdateAPIKeyResponse:
    api_key: Optional[shared.APIKey] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
