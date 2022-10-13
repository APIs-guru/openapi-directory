from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DNSPeering:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    target_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNetwork' }})
    target_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetProject' }})
    
