from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SyncPlayLeaveGroupSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayLeaveGroupRequest:
    security: SyncPlayLeaveGroupSecurity = field()
    

@dataclass
class SyncPlayLeaveGroupResponse:
    content_type: str = field()
    status_code: int = field()
    
