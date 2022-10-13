from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantsUpdateRequest:
    path_params: TenancyTenantsUpdatePathParams = field(default=None)
    request: shared.WritableTenant = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tenant: Optional[shared.Tenant] = field(default=None)
    
