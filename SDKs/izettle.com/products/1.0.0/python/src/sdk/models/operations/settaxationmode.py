from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class SetTaxationModeSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetTaxationModeRequest:
    request: shared.TaxSettingsUpdateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: SetTaxationModeSecurity = field()
    

@dataclass
class SetTaxationModeResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    tax_settings_response: Optional[shared.TaxSettingsResponse] = field(default=None)
    
