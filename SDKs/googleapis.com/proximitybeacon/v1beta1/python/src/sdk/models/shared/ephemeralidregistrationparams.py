from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EphemeralIDRegistrationParams:
    r"""EphemeralIDRegistrationParams
    Information a client needs to provision and register beacons that broadcast Eddystone-EID format beacon IDs, using Elliptic curve Diffie-Hellman key exchange. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.
    """
    
    max_rotation_period_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRotationPeriodExponent') }})
    min_rotation_period_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minRotationPeriodExponent') }})
    service_ecdh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceEcdhPublicKey') }})
    
