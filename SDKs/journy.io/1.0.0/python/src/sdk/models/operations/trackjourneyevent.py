from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrackJourneyEventRequestBodyIdentificationAccount:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    

@dataclass_json
@dataclass
class TrackJourneyEventRequestBodyIdentificationUser:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass_json
@dataclass
class TrackJourneyEventRequestBodyIdentification:
    account: Optional[TrackJourneyEventRequestBodyIdentificationAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    user: Optional[TrackJourneyEventRequestBodyIdentificationUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class TrackJourneyEventRequestBody:
    identification: TrackJourneyEventRequestBodyIdentification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identification' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    triggered_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggeredAt' }})
    

@dataclass
class TrackJourneyEventRequest:
    request: TrackJourneyEventRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent201ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent201ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: TrackJourneyEvent201ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent400ApplicationJSONErrorsParameters:
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent400ApplicationJSONErrors:
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    parameters: Optional[TrackJourneyEvent400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent400ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent400ApplicationJSON:
    errors: TrackJourneyEvent400ApplicationJSONErrors = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: TrackJourneyEvent400ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent401ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent401ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: TrackJourneyEvent401ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent403ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent403ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: TrackJourneyEvent403ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent429ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent429ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: TrackJourneyEvent429ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent500ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class TrackJourneyEvent500ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: TrackJourneyEvent500ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class TrackJourneyEventResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    track_journey_event_201_application_json_object: Optional[TrackJourneyEvent201ApplicationJSON] = field(default=None)
    track_journey_event_400_application_json_object: Optional[TrackJourneyEvent400ApplicationJSON] = field(default=None)
    track_journey_event_401_application_json_object: Optional[TrackJourneyEvent401ApplicationJSON] = field(default=None)
    track_journey_event_403_application_json_object: Optional[TrackJourneyEvent403ApplicationJSON] = field(default=None)
    track_journey_event_429_application_json_object: Optional[TrackJourneyEvent429ApplicationJSON] = field(default=None)
    track_journey_event_500_application_json_object: Optional[TrackJourneyEvent500ApplicationJSON] = field(default=None)
    
