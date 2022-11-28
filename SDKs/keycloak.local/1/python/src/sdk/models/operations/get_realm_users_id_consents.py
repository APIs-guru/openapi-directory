from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmUsersIDConsentsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDConsentsRequest:
    path_params: GetRealmUsersIDConsentsPathParams = field()
    

@dataclass
class GetRealmUsersIDConsentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_users_id_consents_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
