from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlaceInfo:
    r"""PlaceInfo
    Defines an area that's represented by a place ID.
    """
    
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    place_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeName') }})
    
