from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import doublerange


@dataclass_json
@dataclass
class DoubleMatcher:
    exact: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exact' }})
    range: Optional[doublerange.DoubleRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
