from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import value


@dataclass_json
@dataclass
class GqlQueryParameter:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    value: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
