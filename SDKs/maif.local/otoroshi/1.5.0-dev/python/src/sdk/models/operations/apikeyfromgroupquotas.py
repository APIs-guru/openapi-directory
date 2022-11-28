from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIKeyFromGroupQuotasPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeyFromGroupQuotasSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeyFromGroupQuotasRequest:
    path_params: APIKeyFromGroupQuotasPathParams = field()
    security: APIKeyFromGroupQuotasSecurity = field()
    

@dataclass
class APIKeyFromGroupQuotasResponse:
    content_type: str = field()
    status_code: int = field()
    quotas: Optional[shared.Quotas] = field(default=None)
    
