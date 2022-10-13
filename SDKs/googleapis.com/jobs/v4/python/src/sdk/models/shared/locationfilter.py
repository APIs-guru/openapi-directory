from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import latlng

class LocationFilterTelecommutePreferenceEnum(str, Enum):
    TELECOMMUTE_PREFERENCE_UNSPECIFIED = "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
    TELECOMMUTE_EXCLUDED = "TELECOMMUTE_EXCLUDED"
    TELECOMMUTE_ALLOWED = "TELECOMMUTE_ALLOWED"
    TELECOMMUTE_JOBS_EXCLUDED = "TELECOMMUTE_JOBS_EXCLUDED"


@dataclass_json
@dataclass
class LocationFilter:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    distance_in_miles: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distanceInMiles' }})
    lat_lng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latLng' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    telecommute_preference: Optional[LocationFilterTelecommutePreferenceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telecommutePreference' }})
    
