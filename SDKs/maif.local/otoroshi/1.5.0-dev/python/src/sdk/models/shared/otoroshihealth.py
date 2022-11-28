from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OtoroshiHealthDatastoreEnum(str, Enum):
    HEALTHY = "healthy"
    UNHEALTHY = "unhealthy"
    UNREACHABLE = "unreachable"

class OtoroshiHealthOtoroshiEnum(str, Enum):
    HEALTHY = "healthy"
    UNHEALTHY = "unhealthy"
    DOWN = "down"


@dataclass_json
@dataclass
class OtoroshiHealth:
    r"""OtoroshiHealth
    The structure that represent current Otoroshi health
    """
    
    datastore: OtoroshiHealthDatastoreEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastore') }})
    otoroshi: OtoroshiHealthOtoroshiEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('otoroshi') }})
    
