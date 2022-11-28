from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlanGroupsCreateRequest:
    request: shared.WritableVlanGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlanGroupsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    vlan_group: Optional[shared.VlanGroup] = field(default=None)
    
