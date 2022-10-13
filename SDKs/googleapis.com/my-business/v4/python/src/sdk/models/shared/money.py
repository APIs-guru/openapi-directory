from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Money:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    nanos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nanos' }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    
