from dataclasses import dataclass, field



@dataclass
class PutRealmDefaultDefaultClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmDefaultDefaultClientScopesClientScopeIDRequest:
    path_params: PutRealmDefaultDefaultClientScopesClientScopeIDPathParams = field()
    

@dataclass
class PutRealmDefaultDefaultClientScopesClientScopeIDResponse:
    content_type: str = field()
    status_code: int = field()
    
