from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrackJourneyEventRequestBodyIdentificationAccount:
    r"""TrackJourneyEventRequestBodyIdentificationAccount
    Account identification requires an accountId, domain or both
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    

@dataclass_json
@dataclass
class TrackJourneyEventRequestBodyIdentificationUser:
    r"""TrackJourneyEventRequestBodyIdentificationUser
    User identification requires a userId, email or both
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class TrackJourneyEventRequestBodyIdentification:
    r"""TrackJourneyEventRequestBodyIdentification
    Event identification requires a user, account or both
    """
    
    account: Optional[TrackJourneyEventRequestBodyIdentificationAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    user: Optional[TrackJourneyEventRequestBodyIdentificationUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class TrackJourneyEventRequestBody:
    r"""TrackJourneyEventRequestBody
    Event for a user or an account
    """
    
    identification: TrackJourneyEventRequestBodyIdentification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    triggered_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggeredAt') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent201ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent201ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent201ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent400ApplicationJSONErrorsParameters:
    r"""TrackJourneyEvent400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent400ApplicationJSONErrors:
    r"""TrackJourneyEvent400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[TrackJourneyEvent400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent400ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent400ApplicationJSON:
    errors: TrackJourneyEvent400ApplicationJSONErrors = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent400ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent401ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent401ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent401ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent403ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent403ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent403ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent429ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent429ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent429ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent500ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent500ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: TrackJourneyEvent500ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class TrackJourneyEventRequest:
    request: TrackJourneyEventRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TrackJourneyEventResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    track_journey_event_201_application_json_object: Optional[TrackJourneyEvent201ApplicationJSON] = field(default=None)
    track_journey_event_400_application_json_object: Optional[TrackJourneyEvent400ApplicationJSON] = field(default=None)
    track_journey_event_401_application_json_object: Optional[TrackJourneyEvent401ApplicationJSON] = field(default=None)
    track_journey_event_403_application_json_object: Optional[TrackJourneyEvent403ApplicationJSON] = field(default=None)
    track_journey_event_429_application_json_object: Optional[TrackJourneyEvent429ApplicationJSON] = field(default=None)
    track_journey_event_500_application_json_object: Optional[TrackJourneyEvent500ApplicationJSON] = field(default=None)
    
