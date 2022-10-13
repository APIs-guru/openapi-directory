from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nodematcher


@dataclass_json
@dataclass
class ClientStatusRequest:
    node_matchers: Optional[List[nodematcher.NodeMatcher]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeMatchers' }})
    
