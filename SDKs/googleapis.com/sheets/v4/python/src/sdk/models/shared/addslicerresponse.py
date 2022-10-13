from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import slicer


@dataclass_json
@dataclass
class AddSlicerResponse:
    slicer: Optional[slicer.Slicer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slicer' }})
    
