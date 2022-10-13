from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PeeredDNSDomain:
    dns_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsSuffix' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
