from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayJoinGroupRequests:
    join_group_request_dto: Optional[shared.JoinGroupRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    join_group_request_dto1: Optional[shared.JoinGroupRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    join_group_request_dto2: Optional[shared.JoinGroupRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayJoinGroupSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayJoinGroupRequest:
    request: SyncPlayJoinGroupRequests = field()
    security: SyncPlayJoinGroupSecurity = field()
    

@dataclass
class SyncPlayJoinGroupResponse:
    content_type: str = field()
    status_code: int = field()
    
