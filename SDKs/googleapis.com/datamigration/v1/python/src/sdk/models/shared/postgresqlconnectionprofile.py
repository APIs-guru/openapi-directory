from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PostgreSQLConnectionProfileNetworkArchitectureEnum(str, Enum):
    NETWORK_ARCHITECTURE_UNSPECIFIED = "NETWORK_ARCHITECTURE_UNSPECIFIED"
    NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER"
    NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"


@dataclass_json
@dataclass
class PostgreSQLConnectionProfileInput:
    r"""PostgreSQLConnectionProfileInput
    Specifies connection parameters required specifically for PostgreSQL databases.
    """
    
    cloud_sql_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlId') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[SslConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class PostgreSQLConnectionProfile:
    r"""PostgreSQLConnectionProfile
    Specifies connection parameters required specifically for PostgreSQL databases.
    """
    
    cloud_sql_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlId') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    network_architecture: Optional[PostgreSQLConnectionProfileNetworkArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkArchitecture') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordSet') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[SslConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
