from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantsReadRequest:
    path_params: TenancyTenantsReadPathParams = field(default=None)
    

@dataclass
class TenancyTenantsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tenant: Optional[shared.Tenant] = field(default=None)
    
