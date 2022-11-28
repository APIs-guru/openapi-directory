from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetManagedLinodeSettingPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetManagedLinodeSettingSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetManagedLinodeSettingDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetManagedLinodeSettingRequest:
    path_params: GetManagedLinodeSettingPathParams = field()
    security: GetManagedLinodeSettingSecurity = field()
    

@dataclass
class GetManagedLinodeSettingResponse:
    content_type: str = field()
    status_code: int = field()
    managed_linode_settings: Optional[shared.ManagedLinodeSettings] = field(default=None)
    get_managed_linode_setting_default_application_json_object: Optional[GetManagedLinodeSettingDefaultApplicationJSON] = field(default=None)
    
