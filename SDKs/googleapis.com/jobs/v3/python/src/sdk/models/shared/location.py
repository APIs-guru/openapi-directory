from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import latlng
from . import postaladdress

class LocationLocationTypeEnum(str, Enum):
    LOCATION_TYPE_UNSPECIFIED = "LOCATION_TYPE_UNSPECIFIED"
    COUNTRY = "COUNTRY"
    ADMINISTRATIVE_AREA = "ADMINISTRATIVE_AREA"
    SUB_ADMINISTRATIVE_AREA = "SUB_ADMINISTRATIVE_AREA"
    LOCALITY = "LOCALITY"
    POSTAL_CODE = "POSTAL_CODE"
    SUB_LOCALITY = "SUB_LOCALITY"
    SUB_LOCALITY_1 = "SUB_LOCALITY_1"
    SUB_LOCALITY_2 = "SUB_LOCALITY_2"
    NEIGHBORHOOD = "NEIGHBORHOOD"
    STREET_ADDRESS = "STREET_ADDRESS"


@dataclass_json
@dataclass
class Location:
    lat_lng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latLng' }})
    location_type: Optional[LocationLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationType' }})
    postal_address: Optional[postaladdress.PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalAddress' }})
    radius_in_miles: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusInMiles' }})
    
