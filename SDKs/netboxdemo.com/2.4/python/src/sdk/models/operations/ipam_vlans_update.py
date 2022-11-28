from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlansUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlansUpdateRequest:
    path_params: IpamVlansUpdatePathParams = field()
    request: shared.WritableVlanInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlansUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    vlan: Optional[shared.Vlan] = field(default=None)
    
