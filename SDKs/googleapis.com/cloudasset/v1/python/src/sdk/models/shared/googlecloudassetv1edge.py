from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudAssetV1Edge:
    source_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceNode' }})
    target_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNode' }})
    
