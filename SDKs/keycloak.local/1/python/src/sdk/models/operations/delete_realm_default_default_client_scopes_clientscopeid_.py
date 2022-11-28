from dataclasses import dataclass, field



@dataclass
class DeleteRealmDefaultDefaultClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmDefaultDefaultClientScopesClientScopeIDRequest:
    path_params: DeleteRealmDefaultDefaultClientScopesClientScopeIDPathParams = field()
    

@dataclass
class DeleteRealmDefaultDefaultClientScopesClientScopeIDResponse:
    content_type: str = field()
    status_code: int = field()
    
