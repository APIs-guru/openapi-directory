from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteRealmDefaultOptionalClientScopesClientScopeIDPathParams:
    client_scope_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientScopeId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmDefaultOptionalClientScopesClientScopeIDRequest:
    path_params: DeleteRealmDefaultOptionalClientScopesClientScopeIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmDefaultOptionalClientScopesClientScopeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
