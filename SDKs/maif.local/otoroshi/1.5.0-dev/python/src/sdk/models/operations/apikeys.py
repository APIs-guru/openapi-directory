from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class APIKeysPathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeysSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeysRequest:
    path_params: APIKeysPathParams = field()
    security: APIKeysSecurity = field()
    

@dataclass
class APIKeysResponse:
    content_type: str = field()
    status_code: int = field()
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    
