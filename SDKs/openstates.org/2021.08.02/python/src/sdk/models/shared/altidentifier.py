from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AltIdentifier:
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    scheme: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    
