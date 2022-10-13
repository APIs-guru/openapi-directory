from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taxfields


@dataclass_json
@dataclass
class Tax:
    tax: Optional[taxfields.TaxFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    
