from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlanGroupsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlanGroupsUpdateRequest:
    path_params: IpamVlanGroupsUpdatePathParams = field(default=None)
    request: shared.WritableVlanGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlanGroupsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vlan_group: Optional[shared.VlanGroup] = field(default=None)
    
