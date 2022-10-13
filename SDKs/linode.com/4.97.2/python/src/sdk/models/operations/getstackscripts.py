from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetStackScriptsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStackScriptsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetStackScriptsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStackScriptsSecurity:
    option1: Optional[GetStackScriptsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetStackScriptsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetStackScriptsRequest:
    query_params: GetStackScriptsQueryParams = field(default=None)
    security: GetStackScriptsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetStackScripts200ApplicationJSON:
    data: Optional[List[shared.StackScript]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetStackScriptsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetStackScriptsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_stack_scripts_200_application_json_object: Optional[GetStackScripts200ApplicationJSON] = field(default=None)
    get_stack_scripts_default_application_json_object: Optional[GetStackScriptsDefaultApplicationJSON] = field(default=None)
    
