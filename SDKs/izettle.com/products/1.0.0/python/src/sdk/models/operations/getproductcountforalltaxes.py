from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductCountForAllTaxesSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductCountForAllTaxesRequest:
    security: GetProductCountForAllTaxesSecurity = field()
    

@dataclass
class GetProductCountForAllTaxesResponse:
    content_type: str = field()
    status_code: int = field()
    tax_rate_product_count_response: Optional[shared.TaxRateProductCountResponse] = field(default=None)
    
