from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTaxSettingsSecurityOption1:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTaxSettingsSecurityOption2:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTaxSettingsSecurity:
    option1: Optional[GetTaxSettingsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTaxSettingsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTaxSettingsRequest:
    security: GetTaxSettingsSecurity = field(default=None)
    

@dataclass
class GetTaxSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tax_settings_response: Optional[shared.TaxSettingsResponse] = field(default=None)
    
