from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SyncPlayGetGroupsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayGetGroupsRequest:
    security: SyncPlayGetGroupsSecurity = field()
    

@dataclass
class SyncPlayGetGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    group_info_dtos: Optional[List[shared.GroupInfoDto]] = field(default=None)
    
