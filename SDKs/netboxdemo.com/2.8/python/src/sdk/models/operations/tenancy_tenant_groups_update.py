from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantGroupsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantGroupsUpdateRequest:
    path_params: TenancyTenantGroupsUpdatePathParams = field(default=None)
    request: shared.WritableTenantGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantGroupsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tenant_group: Optional[shared.TenantGroup] = field(default=None)
    
