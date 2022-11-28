from dataclasses import dataclass, field



@dataclass
class PutRealmClientsIDDefaultClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientsIDDefaultClientScopesClientScopeIDRequest:
    path_params: PutRealmClientsIDDefaultClientScopesClientScopeIDPathParams = field()
    

@dataclass
class PutRealmClientsIDDefaultClientScopesClientScopeIDResponse:
    content_type: str = field()
    status_code: int = field()
    
