from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetSettingsPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetSettingsQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetSettingsRequest:
    path_params: LandlordControllerGetSettingsPathParams = field(default=None)
    query_params: LandlordControllerGetSettingsQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetSettingsResponse:
    content_type: str = field(default=None)
    landlord_settings_model: Optional[shared.LandlordSettingsModel] = field(default=None)
    status_code: int = field(default=None)
    
