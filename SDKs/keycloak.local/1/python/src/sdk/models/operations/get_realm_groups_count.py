from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRealmGroupsCountPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmGroupsCountQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    top: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'top', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmGroupsCountRequest:
    path_params: GetRealmGroupsCountPathParams = field(default=None)
    query_params: GetRealmGroupsCountQueryParams = field(default=None)
    

@dataclass
class GetRealmGroupsCountResponse:
    content_type: str = field(default=None)
    get_realm_groups_count_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
