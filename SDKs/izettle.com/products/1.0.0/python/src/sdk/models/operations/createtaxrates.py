from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTaxRatesSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTaxRatesRequest:
    request: shared.TaxRatesCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTaxRatesSecurity = field()
    

@dataclass
class CreateTaxRatesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    tax_rates_response: Optional[shared.TaxRatesResponse] = field(default=None)
    
