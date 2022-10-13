from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import node
from . import perxdsconfig


@dataclass_json
@dataclass
class ClientConfig:
    node: Optional[node.Node] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node' }})
    xds_config: Optional[List[perxdsconfig.PerXdsConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xdsConfig' }})
    
