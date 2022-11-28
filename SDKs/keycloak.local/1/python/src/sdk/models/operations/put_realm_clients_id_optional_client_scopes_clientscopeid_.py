from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutRealmClientsIDOptionalClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientsIDOptionalClientScopesClientScopeIDRequest:
    path_params: PutRealmClientsIDOptionalClientScopesClientScopeIDPathParams = field()
    

@dataclass
class PutRealmClientsIDOptionalClientScopesClientScopeIDResponse:
    content_type: str = field()
    status_code: int = field()
    
