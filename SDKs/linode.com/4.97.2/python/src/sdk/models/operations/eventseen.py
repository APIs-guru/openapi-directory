from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EventSeenPathParams:
    event_id: int = field(default=None, metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class EventSeenSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class EventSeenSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EventSeenSecurity:
    option1: Optional[EventSeenSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[EventSeenSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class EventSeenRequest:
    path_params: EventSeenPathParams = field(default=None)
    security: EventSeenSecurity = field(default=None)
    

@dataclass_json
@dataclass
class EventSeenDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class EventSeenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    event_seen_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    event_seen_default_application_json_object: Optional[EventSeenDefaultApplicationJSON] = field(default=None)
    
