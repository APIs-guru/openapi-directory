from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import polygon


@dataclass_json
@dataclass
class IsochroneResponsePolygonProperties:
    bucket: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    

@dataclass_json
@dataclass
class IsochroneResponsePolygon:
    geometry: Optional[polygon.Polygon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geometry' }})
    properties: Optional[IsochroneResponsePolygonProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
