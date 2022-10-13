from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteTaxRatePathParams:
    tax_rate_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'taxRateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaxRateSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteTaxRateSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteTaxRateSecurity:
    option1: Optional[DeleteTaxRateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteTaxRateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteTaxRateRequest:
    path_params: DeleteTaxRatePathParams = field(default=None)
    security: DeleteTaxRateSecurity = field(default=None)
    

@dataclass
class DeleteTaxRateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
