from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import advertisedid
from . import ephemeralidregistration
from . import indoorlevel
from . import latlng

class BeaconExpectedStabilityEnum(str, Enum):
    STABILITY_UNSPECIFIED = "STABILITY_UNSPECIFIED"
    STABLE = "STABLE"
    PORTABLE = "PORTABLE"
    MOBILE = "MOBILE"
    ROVING = "ROVING"

class BeaconStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DECOMMISSIONED = "DECOMMISSIONED"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class Beacon:
    advertised_id: Optional[advertisedid.AdvertisedID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertisedId' }})
    beacon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beaconName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ephemeral_id_registration: Optional[ephemeralidregistration.EphemeralIDRegistration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ephemeralIdRegistration' }})
    expected_stability: Optional[BeaconExpectedStabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedStability' }})
    indoor_level: Optional[indoorlevel.IndoorLevel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indoorLevel' }})
    lat_lng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latLng' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    provisioning_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningKey' }})
    status: Optional[BeaconStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
