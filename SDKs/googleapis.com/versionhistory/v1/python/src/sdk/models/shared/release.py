from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import interval


@dataclass_json
@dataclass
class Release:
    fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fraction' }})
    fraction_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fractionGroup' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    serving: Optional[interval.Interval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serving' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
