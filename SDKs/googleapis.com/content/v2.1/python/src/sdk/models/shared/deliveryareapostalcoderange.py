from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeliveryAreaPostalCodeRange:
    first_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPostalCode' }})
    last_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastPostalCode' }})
    
