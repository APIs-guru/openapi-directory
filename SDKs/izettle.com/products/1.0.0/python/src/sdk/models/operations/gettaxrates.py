from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTaxRatesSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTaxRatesSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTaxRatesSecurity:
    option1: Optional[GetTaxRatesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTaxRatesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTaxRatesRequest:
    security: GetTaxRatesSecurity = field(default=None)
    

@dataclass
class GetTaxRatesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tax_rates_responses: Optional[List[shared.TaxRatesResponse]] = field(default=None)
    
