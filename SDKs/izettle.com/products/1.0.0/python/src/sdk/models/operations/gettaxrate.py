from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTaxRatePathParams:
    tax_rate_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'taxRateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaxRateSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTaxRateSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTaxRateSecurity:
    option1: Optional[GetTaxRateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTaxRateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTaxRateRequest:
    path_params: GetTaxRatePathParams = field(default=None)
    security: GetTaxRateSecurity = field(default=None)
    

@dataclass
class GetTaxRateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tax_rate: Optional[shared.TaxRate] = field(default=None)
    
