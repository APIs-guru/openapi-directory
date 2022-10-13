from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlanGroupsCreateRequest:
    request: shared.WritableVlanGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlanGroupsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vlan_group: Optional[shared.VlanGroup] = field(default=None)
    
