from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantGroupsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantGroupsPartialUpdateRequest:
    path_params: TenancyTenantGroupsPartialUpdatePathParams = field(default=None)
    request: shared.TenantGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantGroupsPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tenant_group: Optional[shared.TenantGroup] = field(default=None)
    
