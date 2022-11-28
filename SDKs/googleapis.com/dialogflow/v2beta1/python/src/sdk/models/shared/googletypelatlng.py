from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleTypeLatLng:
    r"""GoogleTypeLatLng
    An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
    """
    
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    
