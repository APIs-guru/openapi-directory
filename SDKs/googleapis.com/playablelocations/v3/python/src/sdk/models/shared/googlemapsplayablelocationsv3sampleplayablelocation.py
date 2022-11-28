from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocation:
    r"""GoogleMapsPlayablelocationsV3SamplePlayableLocation
    A geographical point suitable for placing game objects in location-based games.
    """
    
    center_point: Optional[GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerPoint') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    plus_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plusCode') }})
    snapped_point: Optional[GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snappedPoint') }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
