from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tilecoordinates
from . import firstderivativeelevationgrid
from . import secondderivativeelevationgrid


@dataclass_json
@dataclass
class TerrainTile:
    coordinates: Optional[tilecoordinates.TileCoordinates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    first_derivative: Optional[firstderivativeelevationgrid.FirstDerivativeElevationGrid] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstDerivative' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    second_derivative: Optional[secondderivativeelevationgrid.SecondDerivativeElevationGrid] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondDerivative' }})
    
