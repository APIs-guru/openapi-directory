from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DatabaseDatabaseDialectEnum(str, Enum):
    DATABASE_DIALECT_UNSPECIFIED = "DATABASE_DIALECT_UNSPECIFIED"
    GOOGLE_STANDARD_SQL = "GOOGLE_STANDARD_SQL"
    POSTGRESQL = "POSTGRESQL"

class DatabaseStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    READY_OPTIMIZING = "READY_OPTIMIZING"


@dataclass_json
@dataclass
class Database:
    r"""Database
    A Cloud Spanner database.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database_dialect: Optional[DatabaseDatabaseDialectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseDialect') }})
    default_leader: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLeader') }})
    earliest_version_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliestVersionTime') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    encryption_info: Optional[List[EncryptionInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restore_info: Optional[RestoreInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreInfo') }})
    state: Optional[DatabaseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    version_retention_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionRetentionPeriod') }})
    
