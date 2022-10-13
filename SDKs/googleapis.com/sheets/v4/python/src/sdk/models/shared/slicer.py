from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedobjectposition
from . import slicerspec


@dataclass_json
@dataclass
class Slicer:
    position: Optional[embeddedobjectposition.EmbeddedObjectPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    slicer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slicerId' }})
    spec: Optional[slicerspec.SlicerSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
