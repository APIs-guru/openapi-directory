from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class LoadServiceRequestBody:
    service_description_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_description_url') }})
    service_moniker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_moniker') }})
    
class LoadService200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class LoadService200ApplicationJSON:
    api: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: LoadService200ApplicationJSONStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class LoadServiceRequest:
    request: Optional[LoadServiceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LoadServiceResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    load_service_200_application_json_object: Optional[LoadService200ApplicationJSON] = field(default=None)
    
