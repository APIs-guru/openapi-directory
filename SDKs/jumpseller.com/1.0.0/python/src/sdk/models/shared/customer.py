from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customerfields


@dataclass_json
@dataclass
class Customer:
    customer: Optional[customerfields.CustomerFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    
