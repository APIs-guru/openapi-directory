from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UnloadServicePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    
class UnloadService200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class UnloadService200ApplicationJSON:
    api: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: UnloadService200ApplicationJSONStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class UnloadServiceRequest:
    path_params: UnloadServicePathParams = field()
    

@dataclass
class UnloadServiceResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    unload_service_200_application_json_object: Optional[UnloadService200ApplicationJSON] = field(default=None)
    
