from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IsochroneResponsePolygonProperties:
    bucket: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    

@dataclass_json
@dataclass
class IsochroneResponsePolygon:
    r"""IsochroneResponsePolygon
    A found path
    """
    
    geometry: Optional[Polygon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: Optional[IsochroneResponsePolygonProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
