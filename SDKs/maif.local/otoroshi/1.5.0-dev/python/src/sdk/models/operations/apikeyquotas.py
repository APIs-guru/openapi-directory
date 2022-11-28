from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIKeyQuotasPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeyQuotasSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeyQuotasRequest:
    path_params: APIKeyQuotasPathParams = field()
    security: APIKeyQuotasSecurity = field()
    

@dataclass
class APIKeyQuotasResponse:
    content_type: str = field()
    status_code: int = field()
    quotas: Optional[shared.Quotas] = field(default=None)
    
