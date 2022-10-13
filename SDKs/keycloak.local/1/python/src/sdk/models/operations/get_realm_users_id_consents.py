from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmUsersIDConsentsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDConsentsRequest:
    path_params: GetRealmUsersIDConsentsPathParams = field(default=None)
    

@dataclass
class GetRealmUsersIDConsentsResponse:
    content_type: str = field(default=None)
    get_realm_users_id_consents_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
