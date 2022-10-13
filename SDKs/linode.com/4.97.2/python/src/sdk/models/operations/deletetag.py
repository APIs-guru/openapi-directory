from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteTagPathParams:
    label: str = field(default=None, metadata={'path_param': { 'field_name': 'label', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTagSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteTagSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteTagSecurity:
    option1: Optional[DeleteTagSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteTagSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteTagRequest:
    path_params: DeleteTagPathParams = field(default=None)
    security: DeleteTagSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteTagDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_tag_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_tag_default_application_json_object: Optional[DeleteTagDefaultApplicationJSON] = field(default=None)
    
