from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AssignIPsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AssignIPsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AssignIPsSecurity:
    option1: Optional[AssignIPsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AssignIPsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AssignIPsRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AssignIPsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AssignIPsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AssignIPsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    assign_i_ps_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    assign_i_ps_default_application_json_object: Optional[AssignIPsDefaultApplicationJSON] = field(default=None)
    
