from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import alloydbconnectionprofile
from . import cloudsqlconnectionprofile
from . import status
from . import mysqlconnectionprofile
from . import postgresqlconnectionprofile

class ConnectionProfileProviderEnum(str, Enum):
    DATABASE_PROVIDER_UNSPECIFIED = "DATABASE_PROVIDER_UNSPECIFIED"
    CLOUDSQL = "CLOUDSQL"
    RDS = "RDS"
    AURORA = "AURORA"
    ALLOYDB = "ALLOYDB"

class ConnectionProfileStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    CREATING = "CREATING"
    READY = "READY"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETED = "DELETED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class ConnectionProfile:
    alloydb: Optional[alloydbconnectionprofile.AlloyDbConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alloydb' }})
    cloudsql: Optional[cloudsqlconnectionprofile.CloudSQLConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudsql' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mysql: Optional[mysqlconnectionprofile.MySQLConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysql' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    postgresql: Optional[postgresqlconnectionprofile.PostgreSQLConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postgresql' }})
    provider: Optional[ConnectionProfileProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    state: Optional[ConnectionProfileStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
