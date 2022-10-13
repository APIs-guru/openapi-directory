from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DatabaseTypeEngineEnum(str, Enum):
    DATABASE_ENGINE_UNSPECIFIED = "DATABASE_ENGINE_UNSPECIFIED"
    MYSQL = "MYSQL"

class DatabaseTypeProviderEnum(str, Enum):
    DATABASE_PROVIDER_UNSPECIFIED = "DATABASE_PROVIDER_UNSPECIFIED"
    CLOUDSQL = "CLOUDSQL"
    RDS = "RDS"


@dataclass_json
@dataclass
class DatabaseType:
    engine: Optional[DatabaseTypeEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    provider: Optional[DatabaseTypeProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    
