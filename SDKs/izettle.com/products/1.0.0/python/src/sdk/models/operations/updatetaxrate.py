from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTaxRatePathParams:
    tax_rate_uuid: str = field(metadata={'path_param': { 'field_name': 'taxRateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaxRateSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateTaxRateRequest:
    path_params: UpdateTaxRatePathParams = field()
    request: shared.TaxRateUpdateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTaxRateSecurity = field()
    

@dataclass
class UpdateTaxRateResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    tax_rate: Optional[shared.TaxRate] = field(default=None)
    
