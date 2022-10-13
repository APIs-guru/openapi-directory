from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ShareIPsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ShareIPsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ShareIPsSecurity:
    option1: Optional[ShareIPsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ShareIPsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ShareIPsRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ShareIPsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ShareIPsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ShareIPsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    share_i_ps_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    share_i_ps_default_application_json_object: Optional[ShareIPsDefaultApplicationJSON] = field(default=None)
    
