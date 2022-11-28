from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1LocationsIDSettingsScopeSettingsScopePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    settings_scope: str = field(metadata={'path_param': { 'field_name': 'settingsScope', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest:
    path_params: PutSetupV1LocationsIDSettingsScopeSettingsScopePathParams = field()
    

@dataclass
class PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse:
    content_type: str = field()
    status_code: int = field()
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    
