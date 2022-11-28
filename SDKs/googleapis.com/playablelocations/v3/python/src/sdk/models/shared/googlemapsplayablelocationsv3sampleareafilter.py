from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SampleAreaFilter:
    r"""GoogleMapsPlayablelocationsV3SampleAreaFilter
    Specifies the area to search for playable locations.
    """
    
    s2_cell_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s2CellId') }})
    
