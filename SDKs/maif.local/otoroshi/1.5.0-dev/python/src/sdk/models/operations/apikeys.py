from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class APIKeysPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeysSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeysRequest:
    path_params: APIKeysPathParams = field(default=None)
    security: APIKeysSecurity = field(default=None)
    

@dataclass
class APIKeysResponse:
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
