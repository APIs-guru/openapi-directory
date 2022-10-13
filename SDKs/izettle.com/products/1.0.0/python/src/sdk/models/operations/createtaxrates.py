from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTaxRatesSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateTaxRatesSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTaxRatesSecurity:
    option1: Optional[CreateTaxRatesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateTaxRatesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateTaxRatesRequest:
    request: shared.TaxRatesCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTaxRatesSecurity = field(default=None)
    

@dataclass
class CreateTaxRatesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    tax_rates_response: Optional[shared.TaxRatesResponse] = field(default=None)
    
