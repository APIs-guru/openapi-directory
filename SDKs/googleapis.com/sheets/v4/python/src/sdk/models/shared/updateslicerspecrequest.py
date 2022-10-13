from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import slicerspec


@dataclass_json
@dataclass
class UpdateSlicerSpecRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    slicer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slicerId' }})
    spec: Optional[slicerspec.SlicerSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
