from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EphemeralIDRegistration:
    beacon_ecdh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beaconEcdhPublicKey' }})
    beacon_identity_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beaconIdentityKey' }})
    initial_clock_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialClockValue' }})
    initial_eid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialEid' }})
    rotation_period_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotationPeriodExponent' }})
    service_ecdh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceEcdhPublicKey' }})
    
