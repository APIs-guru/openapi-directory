from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchAPIKeyPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIKeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchAPIKeyRequest:
    path_params: PatchAPIKeyPathParams = field(default=None)
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchAPIKeySecurity = field(default=None)
    

@dataclass
class PatchAPIKeyResponse:
    api_key: Optional[shared.APIKey] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
