from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientsIDDefaultClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDDefaultClientScopesClientScopeIDRequest:
    path_params: DeleteRealmClientsIDDefaultClientScopesClientScopeIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmClientsIDDefaultClientScopesClientScopeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
