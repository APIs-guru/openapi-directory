from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantGroupsCreateRequest:
    request: shared.TenantGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantGroupsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    tenant_group: Optional[shared.TenantGroup] = field(default=None)
    
