from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResetAPIKeyQuotasPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetAPIKeyQuotasSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ResetAPIKeyQuotasRequest:
    path_params: ResetAPIKeyQuotasPathParams = field()
    security: ResetAPIKeyQuotasSecurity = field()
    

@dataclass
class ResetAPIKeyQuotasResponse:
    content_type: str = field()
    status_code: int = field()
    quotas: Optional[shared.Quotas] = field(default=None)
    
