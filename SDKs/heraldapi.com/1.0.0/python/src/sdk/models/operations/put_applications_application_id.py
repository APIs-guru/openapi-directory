from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutApplicationsApplicationIDPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutApplicationsApplicationID200ApplicationJSON:
    application: Optional[shared.ApplicationReadV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    

@dataclass
class PutApplicationsApplicationIDRequest:
    path_params: PutApplicationsApplicationIDPathParams = field()
    request: Optional[shared.ApplicationWriteV1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutApplicationsApplicationIDResponse:
    content_type: str = field()
    status_code: int = field()
    put_applications_application_id_200_application_json_object: Optional[PutApplicationsApplicationID200ApplicationJSON] = field(default=None)
    
