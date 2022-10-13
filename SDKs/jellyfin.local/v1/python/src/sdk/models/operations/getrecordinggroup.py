from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRecordingGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecordingGroupSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRecordingGroupRequest:
    path_params: GetRecordingGroupPathParams = field(default=None)
    security: GetRecordingGroupSecurity = field(default=None)
    

@dataclass
class GetRecordingGroupResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
