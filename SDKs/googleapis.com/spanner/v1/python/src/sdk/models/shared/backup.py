from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BackupDatabaseDialectEnum(str, Enum):
    DATABASE_DIALECT_UNSPECIFIED = "DATABASE_DIALECT_UNSPECIFIED"
    GOOGLE_STANDARD_SQL = "GOOGLE_STANDARD_SQL"
    POSTGRESQL = "POSTGRESQL"

class BackupStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"


@dataclass_json
@dataclass
class Backup:
    r"""Backup
    A backup of a Cloud Spanner database.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    database_dialect: Optional[BackupDatabaseDialectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseDialect') }})
    encryption_info: Optional[EncryptionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionInfo') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    max_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxExpireTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    referencing_backups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referencingBackups') }})
    referencing_databases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referencingDatabases') }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    state: Optional[BackupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    version_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTime') }})
    

@dataclass_json
@dataclass
class BackupInput:
    r"""BackupInput
    A backup of a Cloud Spanner database.
    """
    
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    encryption_info: Optional[EncryptionInfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionInfo') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTime') }})
    
