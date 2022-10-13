from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaxRate:
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    
