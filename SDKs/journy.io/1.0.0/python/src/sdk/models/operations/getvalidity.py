from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetValidity200ApplicationJSONData:
    permissions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass_json
@dataclass
class GetValidity200ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetValidity200ApplicationJSON:
    data: GetValidity200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: GetValidity200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class GetValidity401ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetValidity401ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: GetValidity401ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class GetValidity403ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetValidity403ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: GetValidity403ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class GetValidity429ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetValidity429ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: GetValidity429ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class GetValidity500ApplicationJSONMeta:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    status: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetValidity500ApplicationJSON:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    meta: GetValidity500ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetValidityResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_validity_200_application_json_object: Optional[GetValidity200ApplicationJSON] = field(default=None)
    get_validity_401_application_json_object: Optional[GetValidity401ApplicationJSON] = field(default=None)
    get_validity_403_application_json_object: Optional[GetValidity403ApplicationJSON] = field(default=None)
    get_validity_429_application_json_object: Optional[GetValidity429ApplicationJSON] = field(default=None)
    get_validity_500_application_json_object: Optional[GetValidity500ApplicationJSON] = field(default=None)
    
