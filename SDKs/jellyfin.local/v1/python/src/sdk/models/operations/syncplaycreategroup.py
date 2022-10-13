from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayCreateGroupRequests:
    new_group_request_dto: Optional[shared.NewGroupRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    new_group_request_dto1: Optional[shared.NewGroupRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    new_group_request_dto2: Optional[shared.NewGroupRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayCreateGroupSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayCreateGroupRequest:
    request: SyncPlayCreateGroupRequests = field(default=None)
    security: SyncPlayCreateGroupSecurity = field(default=None)
    

@dataclass
class SyncPlayCreateGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
