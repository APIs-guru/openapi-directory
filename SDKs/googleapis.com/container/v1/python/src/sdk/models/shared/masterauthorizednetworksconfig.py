from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cidrblock


@dataclass_json
@dataclass
class MasterAuthorizedNetworksConfig:
    cidr_blocks: Optional[List[cidrblock.CidrBlock]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrBlocks' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
