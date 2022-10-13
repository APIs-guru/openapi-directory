from dataclasses import dataclass, field



@dataclass
class PutRealmDefaultDefaultClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmDefaultDefaultClientScopesClientScopeIDRequest:
    path_params: PutRealmDefaultDefaultClientScopesClientScopeIDPathParams = field(default=None)
    

@dataclass
class PutRealmDefaultDefaultClientScopesClientScopeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
