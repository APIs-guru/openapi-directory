from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EventReadPathParams:
    event_id: int = field(default=None, metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class EventReadSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class EventReadSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EventReadSecurity:
    option1: Optional[EventReadSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[EventReadSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class EventReadRequest:
    path_params: EventReadPathParams = field(default=None)
    security: EventReadSecurity = field(default=None)
    

@dataclass_json
@dataclass
class EventReadDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class EventReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    event_read_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    event_read_default_application_json_object: Optional[EventReadDefaultApplicationJSON] = field(default=None)
    
