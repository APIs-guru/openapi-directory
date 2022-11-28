from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTaxRatePathParams:
    tax_rate_uuid: str = field(metadata={'path_param': { 'field_name': 'taxRateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaxRateSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTaxRateRequest:
    path_params: GetTaxRatePathParams = field()
    security: GetTaxRateSecurity = field()
    

@dataclass
class GetTaxRateResponse:
    content_type: str = field()
    status_code: int = field()
    tax_rate: Optional[shared.TaxRate] = field(default=None)
    
