from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VLanConfigQinQOuterVlanEthertypeEnum(str, Enum):
    ZEROX8100 = "0x8100"
    ZEROX88A8 = "0x88a8"
    ZEROX9100 = "0x9100"


@dataclass_json
@dataclass
class VLanConfigQinQ:
    inner_vlan: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inner_vlan' }})
    outer_vlan: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_vlan' }})
    outer_vlan_ethertype: Optional[VLanConfigQinQOuterVlanEthertypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_vlan_ethertype' }})
    vlan_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan_type' }})
    
