from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutRealmClientsIDOptionalClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientsIDOptionalClientScopesClientScopeIDRequest:
    path_params: PutRealmClientsIDOptionalClientScopesClientScopeIDPathParams = field(default=None)
    

@dataclass
class PutRealmClientsIDOptionalClientScopesClientScopeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
