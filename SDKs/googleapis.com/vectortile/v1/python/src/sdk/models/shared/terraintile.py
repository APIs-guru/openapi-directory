from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TerrainTile:
    r"""TerrainTile
    A tile containing information about the terrain located in the region it covers.
    """
    
    coordinates: Optional[TileCoordinates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    first_derivative: Optional[FirstDerivativeElevationGrid] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDerivative') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    second_derivative: Optional[SecondDerivativeElevationGrid] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondDerivative') }})
    
