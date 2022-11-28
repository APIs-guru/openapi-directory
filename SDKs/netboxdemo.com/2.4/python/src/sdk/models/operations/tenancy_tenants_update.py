from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantsUpdateRequest:
    path_params: TenancyTenantsUpdatePathParams = field()
    request: shared.WritableTenantInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    tenant: Optional[shared.Tenant] = field(default=None)
    
