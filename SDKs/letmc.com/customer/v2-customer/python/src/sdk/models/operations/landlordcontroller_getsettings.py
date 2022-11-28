from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetSettingsPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetSettingsQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetSettingsRequest:
    path_params: LandlordControllerGetSettingsPathParams = field()
    query_params: LandlordControllerGetSettingsQueryParams = field()
    

@dataclass
class LandlordControllerGetSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    landlord_settings_model: Optional[shared.LandlordSettingsModel] = field(default=None)
    
