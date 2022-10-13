from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantsCreateRequest:
    request: shared.WritableTenant = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tenant: Optional[shared.Tenant] = field(default=None)
    
