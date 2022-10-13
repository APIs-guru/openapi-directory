from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import namedrange


@dataclass_json
@dataclass
class AddNamedRangeResponse:
    named_range: Optional[namedrange.NamedRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedRange' }})
    
