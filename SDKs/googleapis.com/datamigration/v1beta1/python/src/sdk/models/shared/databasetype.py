from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DatabaseType
    A message defining the database engine and provider.
    """
    
    engine: Optional[DatabaseTypeEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    provider: Optional[DatabaseTypeProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    
