from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRealmUsersIDGroupsCountPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDGroupsCountQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmUsersIDGroupsCountRequest:
    path_params: GetRealmUsersIDGroupsCountPathParams = field(default=None)
    query_params: GetRealmUsersIDGroupsCountQueryParams = field(default=None)
    

@dataclass
class GetRealmUsersIDGroupsCountResponse:
    content_type: str = field(default=None)
    get_realm_users_id_groups_count_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
