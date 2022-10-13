from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAccountSettingsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAccountSettingsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateAccountSettingsSecurity:
    option1: Optional[UpdateAccountSettingsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateAccountSettingsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateAccountSettingsRequest:
    request: shared.AccountSettings = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAccountSettingsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateAccountSettingsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateAccountSettingsResponse:
    account_settings: Optional[shared.AccountSettings] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_account_settings_default_application_json_object: Optional[UpdateAccountSettingsDefaultApplicationJSON] = field(default=None)
    
