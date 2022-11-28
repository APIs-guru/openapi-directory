from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ShareIPsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ShareIPsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ShareIPsRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ShareIPsSecurity = field()
    

@dataclass
class ShareIPsResponse:
    content_type: str = field()
    status_code: int = field()
    share_i_ps_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    share_i_ps_default_application_json_object: Optional[ShareIPsDefaultApplicationJSON] = field(default=None)
    
