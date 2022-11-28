from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class TenancyTenantGroupsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantGroupsUpdateRequest:
    path_params: TenancyTenantGroupsUpdatePathParams = field()
    request: shared.WritableTenantGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TenancyTenantGroupsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    tenant_group: Optional[shared.TenantGroup] = field(default=None)
    
