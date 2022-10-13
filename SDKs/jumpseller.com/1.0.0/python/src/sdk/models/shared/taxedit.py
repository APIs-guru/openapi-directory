from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taxeditfields


@dataclass_json
@dataclass
class TaxEdit:
    tax: Optional[taxeditfields.TaxEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    
