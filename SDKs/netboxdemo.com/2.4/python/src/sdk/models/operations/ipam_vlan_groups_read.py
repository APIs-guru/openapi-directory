from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlanGroupsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlanGroupsReadRequest:
    path_params: IpamVlanGroupsReadPathParams = field(default=None)
    

@dataclass
class IpamVlanGroupsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vlan_group: Optional[shared.VlanGroup] = field(default=None)
    
