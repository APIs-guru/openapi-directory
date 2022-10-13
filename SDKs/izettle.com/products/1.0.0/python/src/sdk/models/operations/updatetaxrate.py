from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTaxRatePathParams:
    tax_rate_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'taxRateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaxRateSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateTaxRateSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateTaxRateSecurity:
    option1: Optional[UpdateTaxRateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateTaxRateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateTaxRateRequest:
    path_params: UpdateTaxRatePathParams = field(default=None)
    request: shared.TaxRateUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTaxRateSecurity = field(default=None)
    

@dataclass
class UpdateTaxRateResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    tax_rate: Optional[shared.TaxRate] = field(default=None)
    
