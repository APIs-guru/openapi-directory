from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpsertUserRequestBodyIdentification:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass_json
@dataclass
class UpsertUserRequestBody:
    identification: UpsertUserRequestBodyIdentification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identification' }})
    properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

@dataclass
class UpsertUserRequest:
    request: UpsertUserRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpsertUser201ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertUser201ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertUser201ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertUser400ApplicationJSONErrorsParameters:
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    

@dataclass_json
@dataclass
class UpsertUser400ApplicationJSONErrors:
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    parameters: Optional[UpsertUser400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

@dataclass_json
@dataclass
class UpsertUser400ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertUser400ApplicationJSON:
    errors: UpsertUser400ApplicationJSONErrors = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertUser400ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertUser401ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertUser401ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertUser401ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertUser403ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertUser403ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertUser403ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertUser429ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertUser429ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertUser429ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertUser500ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertUser500ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertUser500ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class UpsertUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    upsert_user_201_application_json_object: Optional[UpsertUser201ApplicationJSON] = field(default=None)
    upsert_user_400_application_json_object: Optional[UpsertUser400ApplicationJSON] = field(default=None)
    upsert_user_401_application_json_object: Optional[UpsertUser401ApplicationJSON] = field(default=None)
    upsert_user_403_application_json_object: Optional[UpsertUser403ApplicationJSON] = field(default=None)
    upsert_user_429_application_json_object: Optional[UpsertUser429ApplicationJSON] = field(default=None)
    upsert_user_500_application_json_object: Optional[UpsertUser500ApplicationJSON] = field(default=None)
    
