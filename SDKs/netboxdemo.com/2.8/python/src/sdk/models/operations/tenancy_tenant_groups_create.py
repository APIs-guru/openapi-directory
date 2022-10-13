from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantGroupsCreateRequest:
    request: shared.WritableTenantGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantGroupsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tenant_group: Optional[shared.TenantGroup] = field(default=None)
    
