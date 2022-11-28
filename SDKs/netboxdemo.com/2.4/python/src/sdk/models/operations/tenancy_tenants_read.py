from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantsReadRequest:
    path_params: TenancyTenantsReadPathParams = field()
    

@dataclass
class TenancyTenantsReadResponse:
    content_type: str = field()
    status_code: int = field()
    tenant: Optional[shared.Tenant] = field(default=None)
    
