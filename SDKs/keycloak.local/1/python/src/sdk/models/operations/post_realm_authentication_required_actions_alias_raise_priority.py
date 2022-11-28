from dataclasses import dataclass, field



@dataclass
class PostRealmAuthenticationRequiredActionsAliasRaisePriorityPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest:
    path_params: PostRealmAuthenticationRequiredActionsAliasRaisePriorityPathParams = field()
    

@dataclass
class PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse:
    content_type: str = field()
    status_code: int = field()
    
