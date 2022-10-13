from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CareContextRepresentation:
    display: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    reference_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceNumber' }})
    
