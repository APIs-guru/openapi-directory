from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

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
    datastore: OtoroshiHealthDatastoreEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastore' }})
    otoroshi: OtoroshiHealthOtoroshiEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otoroshi' }})
    
