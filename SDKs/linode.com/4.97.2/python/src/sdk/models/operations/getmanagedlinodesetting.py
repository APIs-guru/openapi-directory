from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedLinodeSettingPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetManagedLinodeSettingSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedLinodeSettingSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedLinodeSettingSecurity:
    option1: Optional[GetManagedLinodeSettingSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedLinodeSettingSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedLinodeSettingRequest:
    path_params: GetManagedLinodeSettingPathParams = field(default=None)
    security: GetManagedLinodeSettingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedLinodeSettingDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedLinodeSettingResponse:
    content_type: str = field(default=None)
    managed_linode_settings: Optional[shared.ManagedLinodeSettings] = field(default=None)
    status_code: int = field(default=None)
    get_managed_linode_setting_default_application_json_object: Optional[GetManagedLinodeSettingDefaultApplicationJSON] = field(default=None)
    
