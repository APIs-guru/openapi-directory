from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedLinodeSettingsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetManagedLinodeSettingsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedLinodeSettingsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedLinodeSettingsSecurity:
    option1: Optional[GetManagedLinodeSettingsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedLinodeSettingsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedLinodeSettingsRequest:
    query_params: GetManagedLinodeSettingsQueryParams = field(default=None)
    security: GetManagedLinodeSettingsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedLinodeSettings200ApplicationJSON:
    data: Optional[List[shared.ManagedLinodeSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetManagedLinodeSettingsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedLinodeSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_managed_linode_settings_200_application_json_object: Optional[GetManagedLinodeSettings200ApplicationJSON] = field(default=None)
    get_managed_linode_settings_default_application_json_object: Optional[GetManagedLinodeSettingsDefaultApplicationJSON] = field(default=None)
    
