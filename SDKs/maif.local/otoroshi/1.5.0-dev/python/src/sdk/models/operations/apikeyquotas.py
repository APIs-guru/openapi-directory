from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIKeyQuotasPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeyQuotasSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeyQuotasRequest:
    path_params: APIKeyQuotasPathParams = field(default=None)
    security: APIKeyQuotasSecurity = field(default=None)
    

@dataclass
class APIKeyQuotasResponse:
    content_type: str = field(default=None)
    quotas: Optional[shared.Quotas] = field(default=None)
    status_code: int = field(default=None)
    
