from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RenewalSettings:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    renewal_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalType' }})
    
