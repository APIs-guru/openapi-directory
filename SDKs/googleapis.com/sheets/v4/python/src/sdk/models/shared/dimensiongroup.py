from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensionrange


@dataclass_json
@dataclass
class DimensionGroup:
    collapsed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collapsed' }})
    depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depth' }})
    range: Optional[dimensionrange.DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
