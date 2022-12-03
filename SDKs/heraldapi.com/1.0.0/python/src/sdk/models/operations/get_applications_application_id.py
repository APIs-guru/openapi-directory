from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetApplicationsApplicationIDPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetApplicationsApplicationID200ApplicationJSON:
    application: Optional[shared.ApplicationReadV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    

@dataclass
class GetApplicationsApplicationIDRequest:
    path_params: GetApplicationsApplicationIDPathParams = field()
    

@dataclass
class GetApplicationsApplicationIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_applications_application_id_200_application_json_object: Optional[GetApplicationsApplicationID200ApplicationJSON] = field(default=None)
    
