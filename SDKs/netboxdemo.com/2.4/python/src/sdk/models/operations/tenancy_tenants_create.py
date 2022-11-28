from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantsCreateRequest:
    request: shared.WritableTenantInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    tenant: Optional[shared.Tenant] = field(default=None)
    
