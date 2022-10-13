from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmGroupsIDMembersPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmGroupsIDMembersQueryParams:
    brief_representation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'briefRepresentation', 'style': 'form', 'explode': True }})
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmGroupsIDMembersRequest:
    path_params: GetRealmGroupsIDMembersPathParams = field(default=None)
    query_params: GetRealmGroupsIDMembersQueryParams = field(default=None)
    

@dataclass
class GetRealmGroupsIDMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_representations: Optional[List[shared.UserRepresentation]] = field(default=None)
    
