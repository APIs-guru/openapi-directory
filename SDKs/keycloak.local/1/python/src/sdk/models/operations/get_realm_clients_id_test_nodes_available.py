from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDTestNodesAvailablePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDTestNodesAvailableRequest:
    path_params: GetRealmClientsIDTestNodesAvailablePathParams = field()
    

@dataclass
class GetRealmClientsIDTestNodesAvailableResponse:
    content_type: str = field()
    status_code: int = field()
    global_request_result: Optional[shared.GlobalRequestResult] = field(default=None)
    
