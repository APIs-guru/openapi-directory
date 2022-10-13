from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EphemeralIDRegistrationParams:
    max_rotation_period_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRotationPeriodExponent' }})
    min_rotation_period_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minRotationPeriodExponent' }})
    service_ecdh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceEcdhPublicKey' }})
    
