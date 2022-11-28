from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SecondDerivativeElevationGrid:
    r"""SecondDerivativeElevationGrid
    A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size.
    """
    
    altitude_multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altitudeMultiplier') }})
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnCount') }})
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodedData') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    
