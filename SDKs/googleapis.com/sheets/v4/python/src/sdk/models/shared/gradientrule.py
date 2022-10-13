from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import interpolationpoint
from . import interpolationpoint
from . import interpolationpoint


@dataclass_json
@dataclass
class GradientRule:
    maxpoint: Optional[interpolationpoint.InterpolationPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxpoint' }})
    midpoint: Optional[interpolationpoint.InterpolationPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'midpoint' }})
    minpoint: Optional[interpolationpoint.InterpolationPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minpoint' }})
    
