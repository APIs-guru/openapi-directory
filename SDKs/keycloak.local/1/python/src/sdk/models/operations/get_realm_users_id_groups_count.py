from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRealmUsersIDGroupsCountPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDGroupsCountQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmUsersIDGroupsCountRequest:
    path_params: GetRealmUsersIDGroupsCountPathParams = field()
    query_params: GetRealmUsersIDGroupsCountQueryParams = field()
    

@dataclass
class GetRealmUsersIDGroupsCountResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_users_id_groups_count_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
