from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networktags


@dataclass_json
@dataclass
class NodePoolAutoConfig:
    network_tags: Optional[networktags.NetworkTags] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTags' }})
    
