from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Beacon
    Details of a beacon device.
    """
    
    advertised_id: Optional[AdvertisedID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisedId') }})
    beacon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beaconName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ephemeral_id_registration: Optional[EphemeralIDRegistration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralIdRegistration') }})
    expected_stability: Optional[BeaconExpectedStabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedStability') }})
    indoor_level: Optional[IndoorLevel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indoorLevel') }})
    lat_lng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLng') }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    provisioning_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningKey') }})
    status: Optional[BeaconStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
