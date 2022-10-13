from dataclasses import dataclass, field



@dataclass
class DeleteRealmDefaultDefaultClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmDefaultDefaultClientScopesClientScopeIDRequest:
    path_params: DeleteRealmDefaultDefaultClientScopesClientScopeIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmDefaultDefaultClientScopesClientScopeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
