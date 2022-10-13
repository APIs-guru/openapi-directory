from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantGroupsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantGroupsReadRequest:
    path_params: TenancyTenantGroupsReadPathParams = field(default=None)
    

@dataclass
class TenancyTenantGroupsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tenant_group: Optional[shared.TenantGroup] = field(default=None)
    
