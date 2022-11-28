from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTaxRatesSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTaxRatesRequest:
    security: GetTaxRatesSecurity = field()
    

@dataclass
class GetTaxRatesResponse:
    content_type: str = field()
    status_code: int = field()
    tax_rates_responses: Optional[List[shared.TaxRatesResponse]] = field(default=None)
    
