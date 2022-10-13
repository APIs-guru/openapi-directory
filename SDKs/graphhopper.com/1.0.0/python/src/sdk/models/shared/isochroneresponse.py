from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import isochroneresponsepolygon


@dataclass_json
@dataclass
class IsochroneResponse:
    copyrights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyrights' }})
    polygons: Optional[List[isochroneresponsepolygon.IsochroneResponsePolygon]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polygons' }})
    
