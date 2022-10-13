from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import extendedvalue


@dataclass_json
@dataclass
class PivotGroupValueMetadata:
    collapsed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collapsed' }})
    value: Optional[extendedvalue.ExtendedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
