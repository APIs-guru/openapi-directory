from dataclasses import dataclass, field



@dataclass
class PostRealmAuthenticationRequiredActionsAliasLowerPriorityPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest:
    path_params: PostRealmAuthenticationRequiredActionsAliasLowerPriorityPathParams = field()
    

@dataclass
class PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse:
    content_type: str = field()
    status_code: int = field()
    
