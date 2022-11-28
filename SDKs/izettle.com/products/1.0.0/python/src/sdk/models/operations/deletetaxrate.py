from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTaxRatePathParams:
    tax_rate_uuid: str = field(metadata={'path_param': { 'field_name': 'taxRateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTaxRateSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteTaxRateRequest:
    path_params: DeleteTaxRatePathParams = field()
    security: DeleteTaxRateSecurity = field()
    

@dataclass
class DeleteTaxRateResponse:
    content_type: str = field()
    status_code: int = field()
    
