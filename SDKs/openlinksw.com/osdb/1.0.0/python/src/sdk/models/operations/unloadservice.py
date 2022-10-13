from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UnloadServicePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnloadServiceRequest:
    path_params: UnloadServicePathParams = field(default=None)
    
class UnloadService200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class UnloadService200ApplicationJSON:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: UnloadService200ApplicationJSONStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class UnloadServiceResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    unload_service_200_application_json_object: Optional[UnloadService200ApplicationJSON] = field(default=None)
    
