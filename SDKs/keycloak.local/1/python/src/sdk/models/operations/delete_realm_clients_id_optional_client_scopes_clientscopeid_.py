from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteRealmClientsIDOptionalClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDOptionalClientScopesClientScopeIDRequest:
    path_params: DeleteRealmClientsIDOptionalClientScopesClientScopeIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmClientsIDOptionalClientScopesClientScopeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
