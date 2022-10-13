from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmAuthenticationExecutionsExecutionIDConfigPathParams:
    execution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDConfigRequest:
    path_params: PostRealmAuthenticationExecutionsExecutionIDConfigPathParams = field(default=None)
    request: shared.AuthenticatorConfigRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
