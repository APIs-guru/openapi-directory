from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsIDPushRevocationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDPushRevocationRequest:
    path_params: PostRealmClientsIDPushRevocationPathParams = field(default=None)
    

@dataclass
class PostRealmClientsIDPushRevocationResponse:
    content_type: str = field(default=None)
    global_request_result: Optional[shared.GlobalRequestResult] = field(default=None)
    status_code: int = field(default=None)
    
