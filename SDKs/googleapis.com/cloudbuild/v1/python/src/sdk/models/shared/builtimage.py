from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timespan


@dataclass_json
@dataclass
class BuiltImage:
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    push_timing: Optional[timespan.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushTiming' }})
    
