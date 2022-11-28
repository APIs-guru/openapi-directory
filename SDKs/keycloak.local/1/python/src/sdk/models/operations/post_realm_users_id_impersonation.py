from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRealmUsersIDImpersonationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDImpersonationRequest:
    path_params: PostRealmUsersIDImpersonationPathParams = field()
    

@dataclass
class PostRealmUsersIDImpersonationResponse:
    content_type: str = field()
    status_code: int = field()
    post_realm_users_id_impersonation_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
