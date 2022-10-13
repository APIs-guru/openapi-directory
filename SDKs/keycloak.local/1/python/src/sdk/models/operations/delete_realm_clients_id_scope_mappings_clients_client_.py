from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class DeleteRealmClientsIDScopeMappingsClientsClientPathParams:
    client: str = field(default=None, metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDScopeMappingsClientsClientRequest:
    path_params: DeleteRealmClientsIDScopeMappingsClientsClientPathParams = field(default=None)
    request: List[shared.RoleRepresentation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteRealmClientsIDScopeMappingsClientsClientResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
