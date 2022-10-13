from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantsPartialUpdateRequest:
    path_params: TenancyTenantsPartialUpdatePathParams = field(default=None)
    request: shared.WritableTenant = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantsPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tenant: Optional[shared.Tenant] = field(default=None)
    
