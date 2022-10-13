from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LinodeConfigInterfacePurposeEnum(str, Enum):
    PUBLIC = "public"
    VLAN = "vlan"


@dataclass_json
@dataclass
class LinodeConfigInterface:
    ipam_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipam_address' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    purpose: Optional[LinodeConfigInterfacePurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    
