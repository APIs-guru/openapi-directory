from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import normalizedcoordinate


@dataclass_json
@dataclass
class Image:
    alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alpha' }})
    resolution: Optional[normalizedcoordinate.NormalizedCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
