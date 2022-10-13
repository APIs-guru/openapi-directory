from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KafkaConfig:
    key_pass: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPass' }})
    key_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyStore' }})
    servers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    trustore: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trustore' }})
    
