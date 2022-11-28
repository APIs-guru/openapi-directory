from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlanGroupsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlanGroupsUpdateRequest:
    path_params: IpamVlanGroupsUpdatePathParams = field()
    request: shared.WritableVlanGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlanGroupsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    vlan_group: Optional[shared.VlanGroup] = field(default=None)
    
