from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmAuthenticationExecutionsExecutionIDConfigPathParams:
    execution_id: str = field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDConfigRequest:
    path_params: PostRealmAuthenticationExecutionsExecutionIDConfigPathParams = field()
    request: shared.AuthenticatorConfigRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDConfigResponse:
    content_type: str = field()
    status_code: int = field()
    
