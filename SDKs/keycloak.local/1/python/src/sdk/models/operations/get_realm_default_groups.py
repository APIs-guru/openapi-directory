from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmDefaultGroupsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmDefaultGroupsRequest:
    path_params: GetRealmDefaultGroupsPathParams = field()
    

@dataclass
class GetRealmDefaultGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    group_representations: Optional[List[shared.GroupRepresentation]] = field(default=None)
    
