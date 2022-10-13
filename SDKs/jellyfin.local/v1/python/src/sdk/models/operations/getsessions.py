from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSessionsQueryParams:
    active_within_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'activeWithinSeconds', 'style': 'form', 'explode': True }})
    controllable_by_user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'controllableByUserId', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSessionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSessionsRequest:
    query_params: GetSessionsQueryParams = field(default=None)
    security: GetSessionsSecurity = field(default=None)
    

@dataclass
class GetSessionsResponse:
    content_type: str = field(default=None)
    session_infos: Optional[List[shared.SessionInfo]] = field(default=None)
    status_code: int = field(default=None)
    
