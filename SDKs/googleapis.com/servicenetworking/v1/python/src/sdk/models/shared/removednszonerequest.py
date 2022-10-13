from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoveDNSZoneRequest:
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerNetwork' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
