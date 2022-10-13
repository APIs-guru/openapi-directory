from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRealmUsersIDImpersonationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDImpersonationRequest:
    path_params: PostRealmUsersIDImpersonationPathParams = field(default=None)
    

@dataclass
class PostRealmUsersIDImpersonationResponse:
    content_type: str = field(default=None)
    post_realm_users_id_impersonation_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
