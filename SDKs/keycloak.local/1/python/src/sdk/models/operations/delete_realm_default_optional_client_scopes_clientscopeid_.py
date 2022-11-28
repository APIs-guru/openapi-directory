from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteRealmDefaultOptionalClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmDefaultOptionalClientScopesClientScopeIDRequest:
    path_params: DeleteRealmDefaultOptionalClientScopesClientScopeIDPathParams = field()
    

@dataclass
class DeleteRealmDefaultOptionalClientScopesClientScopeIDResponse:
    content_type: str = field()
    status_code: int = field()
    
