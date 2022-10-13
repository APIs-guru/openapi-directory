from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumer


@dataclass_json
@dataclass
class NetworkConfig:
    consumers: Optional[List[consumer.Consumer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumers' }})
    
