from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TileJSON:
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribution' }})
    bounds: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bounds' }})
    data: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    grids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grids' }})
    legend: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legend' }})
    maxzoom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxzoom' }})
    minzoom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minzoom' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    tilejson: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tilejson' }})
    tiles: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tiles' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
