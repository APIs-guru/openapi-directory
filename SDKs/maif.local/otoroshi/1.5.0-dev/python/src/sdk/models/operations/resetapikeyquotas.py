from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResetAPIKeyQuotasPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetAPIKeyQuotasSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ResetAPIKeyQuotasRequest:
    path_params: ResetAPIKeyQuotasPathParams = field(default=None)
    security: ResetAPIKeyQuotasSecurity = field(default=None)
    

@dataclass
class ResetAPIKeyQuotasResponse:
    content_type: str = field(default=None)
    quotas: Optional[shared.Quotas] = field(default=None)
    status_code: int = field(default=None)
    
