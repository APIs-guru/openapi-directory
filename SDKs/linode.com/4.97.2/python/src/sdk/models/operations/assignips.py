from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AssignIPsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AssignIPsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AssignIPsRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AssignIPsSecurity = field()
    

@dataclass
class AssignIPsResponse:
    content_type: str = field()
    status_code: int = field()
    assign_i_ps_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    assign_i_ps_default_application_json_object: Optional[AssignIPsDefaultApplicationJSON] = field(default=None)
    
