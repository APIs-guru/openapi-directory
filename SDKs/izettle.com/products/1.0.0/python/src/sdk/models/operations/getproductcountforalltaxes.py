from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductCountForAllTaxesSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProductCountForAllTaxesSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductCountForAllTaxesSecurity:
    option1: Optional[GetProductCountForAllTaxesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProductCountForAllTaxesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProductCountForAllTaxesRequest:
    security: GetProductCountForAllTaxesSecurity = field(default=None)
    

@dataclass
class GetProductCountForAllTaxesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tax_rate_product_count_response: Optional[shared.TaxRateProductCountResponse] = field(default=None)
    
