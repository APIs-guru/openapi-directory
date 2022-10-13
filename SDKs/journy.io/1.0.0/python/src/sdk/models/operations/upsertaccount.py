from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpsertAccountRequestBodyIdentification:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    

@dataclass_json
@dataclass
class UpsertAccountRequestBodyMembersIdentification:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass_json
@dataclass
class UpsertAccountRequestBodyMembers:
    identification: UpsertAccountRequestBodyMembersIdentification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identification' }})
    

@dataclass_json
@dataclass
class UpsertAccountRequestBody:
    identification: UpsertAccountRequestBodyIdentification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identification' }})
    members: Optional[List[UpsertAccountRequestBodyMembers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

@dataclass
class UpsertAccountRequest:
    request: UpsertAccountRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpsertAccount201ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertAccount201ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertAccount201ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertAccount400ApplicationJSONErrorsParameters:
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    

@dataclass_json
@dataclass
class UpsertAccount400ApplicationJSONErrors:
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    parameters: Optional[UpsertAccount400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

@dataclass_json
@dataclass
class UpsertAccount400ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertAccount400ApplicationJSON:
    errors: UpsertAccount400ApplicationJSONErrors = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertAccount400ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertAccount401ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertAccount401ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertAccount401ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertAccount429ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertAccount429ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertAccount429ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class UpsertAccount500ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpsertAccount500ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: UpsertAccount500ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class UpsertAccountResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    upsert_account_201_application_json_object: Optional[UpsertAccount201ApplicationJSON] = field(default=None)
    upsert_account_400_application_json_object: Optional[UpsertAccount400ApplicationJSON] = field(default=None)
    upsert_account_401_application_json_object: Optional[UpsertAccount401ApplicationJSON] = field(default=None)
    upsert_account_429_application_json_object: Optional[UpsertAccount429ApplicationJSON] = field(default=None)
    upsert_account_500_application_json_object: Optional[UpsertAccount500ApplicationJSON] = field(default=None)
    
