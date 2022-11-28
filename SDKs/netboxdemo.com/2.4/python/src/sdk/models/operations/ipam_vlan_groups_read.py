from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlanGroupsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlanGroupsReadRequest:
    path_params: IpamVlanGroupsReadPathParams = field()
    

@dataclass
class IpamVlanGroupsReadResponse:
    content_type: str = field()
    status_code: int = field()
    vlan_group: Optional[shared.VlanGroup] = field(default=None)
    
