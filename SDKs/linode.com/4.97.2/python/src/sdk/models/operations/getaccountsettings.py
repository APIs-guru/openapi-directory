from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAccountSettingsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountSettingsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountSettingsSecurity:
    option1: Optional[GetAccountSettingsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAccountSettingsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAccountSettingsRequest:
    security: GetAccountSettingsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAccountSettingsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetAccountSettingsResponse:
    account_settings: Optional[shared.AccountSettings] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_account_settings_default_application_json_object: Optional[GetAccountSettingsDefaultApplicationJSON] = field(default=None)
    
