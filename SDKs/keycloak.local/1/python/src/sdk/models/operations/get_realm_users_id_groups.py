from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDGroupsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDGroupsQueryParams:
    brief_representation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'briefRepresentation', 'style': 'form', 'explode': True }})
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmUsersIDGroupsRequest:
    path_params: GetRealmUsersIDGroupsPathParams = field()
    query_params: GetRealmUsersIDGroupsQueryParams = field()
    

@dataclass
class GetRealmUsersIDGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    group_representations: Optional[List[shared.GroupRepresentation]] = field(default=None)
    
