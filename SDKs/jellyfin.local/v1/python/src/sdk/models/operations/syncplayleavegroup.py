from dataclasses import dataclass, field



@dataclass
class SyncPlayLeaveGroupSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayLeaveGroupRequest:
    security: SyncPlayLeaveGroupSecurity = field(default=None)
    

@dataclass
class SyncPlayLeaveGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
