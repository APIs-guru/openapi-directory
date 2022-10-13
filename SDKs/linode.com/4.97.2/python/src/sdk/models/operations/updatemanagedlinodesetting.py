from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateManagedLinodeSettingPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateManagedLinodeSettingSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateManagedLinodeSettingSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateManagedLinodeSettingSecurity:
    option1: Optional[UpdateManagedLinodeSettingSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateManagedLinodeSettingSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateManagedLinodeSettingRequest:
    path_params: UpdateManagedLinodeSettingPathParams = field(default=None)
    request: shared.ManagedLinodeSettings = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateManagedLinodeSettingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateManagedLinodeSettingDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateManagedLinodeSettingResponse:
    content_type: str = field(default=None)
    managed_linode_settings: Optional[shared.ManagedLinodeSettings] = field(default=None)
    status_code: int = field(default=None)
    update_managed_linode_setting_default_application_json_object: Optional[UpdateManagedLinodeSettingDefaultApplicationJSON] = field(default=None)
    
