from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SyncPlayGetGroupsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayGetGroupsRequest:
    security: SyncPlayGetGroupsSecurity = field(default=None)
    

@dataclass
class SyncPlayGetGroupsResponse:
    content_type: str = field(default=None)
    group_info_dtos: Optional[List[shared.GroupInfoDto]] = field(default=None)
    status_code: int = field(default=None)
    
