from dataclasses import dataclass, field



@dataclass
class DeleteRealmAuthenticationRequiredActionsAliasPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAuthenticationRequiredActionsAliasRequest:
    path_params: DeleteRealmAuthenticationRequiredActionsAliasPathParams = field(default=None)
    

@dataclass
class DeleteRealmAuthenticationRequiredActionsAliasResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
