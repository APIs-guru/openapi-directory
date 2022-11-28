from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetEventPathParams:
    event_id: int = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetEventDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetEventRequest:
    path_params: GetEventPathParams = field()
    security: GetEventSecurity = field()
    

@dataclass
class GetEventResponse:
    content_type: str = field()
    status_code: int = field()
    event: Optional[shared.Event] = field(default=None)
    get_event_default_application_json_object: Optional[GetEventDefaultApplicationJSON] = field(default=None)
    
