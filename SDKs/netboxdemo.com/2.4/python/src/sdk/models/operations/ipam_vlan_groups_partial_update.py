from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlanGroupsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlanGroupsPartialUpdateRequest:
    path_params: IpamVlanGroupsPartialUpdatePathParams = field()
    request: shared.WritableVlanGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlanGroupsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    vlan_group: Optional[shared.VlanGroup] = field(default=None)
    
