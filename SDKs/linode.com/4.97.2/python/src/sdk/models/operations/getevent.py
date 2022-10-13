from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetEventPathParams:
    event_id: int = field(default=None, metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetEventSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEventSecurity:
    option1: Optional[GetEventSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetEventSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetEventRequest:
    path_params: GetEventPathParams = field(default=None)
    security: GetEventSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetEventDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetEventResponse:
    content_type: str = field(default=None)
    event: Optional[shared.Event] = field(default=None)
    status_code: int = field(default=None)
    get_event_default_application_json_object: Optional[GetEventDefaultApplicationJSON] = field(default=None)
    
