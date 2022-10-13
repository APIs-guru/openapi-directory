from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnableAccountMangedSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class EnableAccountMangedSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EnableAccountMangedSecurity:
    option1: Optional[EnableAccountMangedSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[EnableAccountMangedSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class EnableAccountMangedRequest:
    security: EnableAccountMangedSecurity = field(default=None)
    

@dataclass_json
@dataclass
class EnableAccountMangedDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class EnableAccountMangedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enable_account_manged_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    enable_account_manged_default_application_json_object: Optional[EnableAccountMangedDefaultApplicationJSON] = field(default=None)
    
