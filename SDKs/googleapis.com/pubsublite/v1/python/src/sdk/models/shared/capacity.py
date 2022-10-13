from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Capacity:
    publish_mib_per_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishMibPerSec' }})
    subscribe_mib_per_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribeMibPerSec' }})
    
