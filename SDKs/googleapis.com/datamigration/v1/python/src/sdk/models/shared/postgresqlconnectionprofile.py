from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sslconfig

class PostgreSQLConnectionProfileNetworkArchitectureEnum(str, Enum):
    NETWORK_ARCHITECTURE_UNSPECIFIED = "NETWORK_ARCHITECTURE_UNSPECIFIED"
    NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER"
    NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"


@dataclass_json
@dataclass
class PostgreSQLConnectionProfile:
    cloud_sql_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSqlId' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    network_architecture: Optional[PostgreSQLConnectionProfileNetworkArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkArchitecture' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    password_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordSet' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[sslconfig.SslConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
