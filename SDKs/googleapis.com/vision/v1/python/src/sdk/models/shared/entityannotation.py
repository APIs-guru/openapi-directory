from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingpoly
from . import locationinfo
from . import property


@dataclass_json
@dataclass
class EntityAnnotation:
    bounding_poly: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    locations: Optional[List[locationinfo.LocationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    mid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mid' }})
    properties: Optional[List[property.Property]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    topicality: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicality' }})
    
