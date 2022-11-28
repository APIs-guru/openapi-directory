from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientsIDDefaultClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDDefaultClientScopesClientScopeIDRequest:
    path_params: DeleteRealmClientsIDDefaultClientScopesClientScopeIDPathParams = field()
    

@dataclass
class DeleteRealmClientsIDDefaultClientScopesClientScopeIDResponse:
    content_type: str = field()
    status_code: int = field()
    
