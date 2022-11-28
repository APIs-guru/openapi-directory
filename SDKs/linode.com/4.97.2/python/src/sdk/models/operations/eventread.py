from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EventReadPathParams:
    event_id: int = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class EventReadSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class EventReadDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class EventReadRequest:
    path_params: EventReadPathParams = field()
    security: EventReadSecurity = field()
    

@dataclass
class EventReadResponse:
    content_type: str = field()
    status_code: int = field()
    event_read_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    event_read_default_application_json_object: Optional[EventReadDefaultApplicationJSON] = field(default=None)
    
