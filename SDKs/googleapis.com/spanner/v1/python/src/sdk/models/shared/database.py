from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfig
from . import encryptioninfo
from . import restoreinfo

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
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    database_dialect: Optional[DatabaseDatabaseDialectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseDialect' }})
    default_leader: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLeader' }})
    earliest_version_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earliestVersionTime' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    encryption_info: Optional[List[encryptioninfo.EncryptionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restore_info: Optional[restoreinfo.RestoreInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreInfo' }})
    state: Optional[DatabaseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    version_retention_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionRetentionPeriod' }})
    
