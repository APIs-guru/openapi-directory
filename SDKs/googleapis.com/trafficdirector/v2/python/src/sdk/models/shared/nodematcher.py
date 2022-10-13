from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stringmatcher
from . import structmatcher


@dataclass_json
@dataclass
class NodeMatcher:
    node_id: Optional[stringmatcher.StringMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeId' }})
    node_metadatas: Optional[List[structmatcher.StructMatcher]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeMetadatas' }})
    
