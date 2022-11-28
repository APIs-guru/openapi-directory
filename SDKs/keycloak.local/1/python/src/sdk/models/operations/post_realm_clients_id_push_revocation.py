from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsIDPushRevocationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDPushRevocationRequest:
    path_params: PostRealmClientsIDPushRevocationPathParams = field()
    

@dataclass
class PostRealmClientsIDPushRevocationResponse:
    content_type: str = field()
    status_code: int = field()
    global_request_result: Optional[shared.GlobalRequestResult] = field(default=None)
    
