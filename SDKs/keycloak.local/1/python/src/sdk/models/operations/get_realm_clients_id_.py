from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDRequest:
    path_params: GetRealmClientsIDPathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDResponse:
    client_representation: Optional[shared.ClientRepresentation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
