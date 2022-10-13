from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class LoadServiceRequestBody:
    service_description_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_description_url' }})
    service_moniker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_moniker' }})
    

@dataclass
class LoadServiceRequest:
    request: Optional[LoadServiceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class LoadService200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class LoadService200ApplicationJSON:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: LoadService200ApplicationJSONStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class LoadServiceResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    load_service_200_application_json_object: Optional[LoadService200ApplicationJSON] = field(default=None)
    
