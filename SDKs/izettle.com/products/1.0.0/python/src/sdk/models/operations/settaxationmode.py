from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetTaxationModeSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetTaxationModeSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetTaxationModeSecurity:
    option1: Optional[SetTaxationModeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SetTaxationModeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SetTaxationModeRequest:
    request: shared.TaxSettingsUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SetTaxationModeSecurity = field(default=None)
    

@dataclass
class SetTaxationModeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    tax_settings_response: Optional[shared.TaxSettingsResponse] = field(default=None)
    
