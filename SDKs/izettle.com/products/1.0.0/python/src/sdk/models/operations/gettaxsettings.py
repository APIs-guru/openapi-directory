from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTaxSettingsSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTaxSettingsRequest:
    security: GetTaxSettingsSecurity = field()
    

@dataclass
class GetTaxSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    tax_settings_response: Optional[shared.TaxSettingsResponse] = field(default=None)
    
