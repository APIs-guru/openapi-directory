from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSmUsersPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmUsersQueryParams:
    emails: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'emails', 'style': 'form', 'explode': False }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    scope: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': False }})
    usernames: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'usernames', 'style': 'form', 'explode': False }})
    

@dataclass
class GetNetworkSmUsersRequest:
    path_params: GetNetworkSmUsersPathParams = field()
    query_params: GetNetworkSmUsersQueryParams = field()
    

@dataclass
class GetNetworkSmUsersResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_users_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
