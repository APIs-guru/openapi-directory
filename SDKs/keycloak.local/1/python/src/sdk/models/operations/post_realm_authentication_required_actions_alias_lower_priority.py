from dataclasses import dataclass, field



@dataclass
class PostRealmAuthenticationRequiredActionsAliasLowerPriorityPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest:
    path_params: PostRealmAuthenticationRequiredActionsAliasLowerPriorityPathParams = field(default=None)
    

@dataclass
class PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
