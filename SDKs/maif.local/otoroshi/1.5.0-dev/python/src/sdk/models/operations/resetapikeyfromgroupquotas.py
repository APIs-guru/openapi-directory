from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResetAPIKeyFromGroupQuotasPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetAPIKeyFromGroupQuotasSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ResetAPIKeyFromGroupQuotasRequest:
    path_params: ResetAPIKeyFromGroupQuotasPathParams = field(default=None)
    security: ResetAPIKeyFromGroupQuotasSecurity = field(default=None)
    

@dataclass
class ResetAPIKeyFromGroupQuotasResponse:
    content_type: str = field(default=None)
    quotas: Optional[shared.Quotas] = field(default=None)
    status_code: int = field(default=None)
    
