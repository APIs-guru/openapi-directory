from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectionprofile
from . import mysqlrdbms
from . import oraclerdbms


@dataclass_json
@dataclass
class DiscoverConnectionProfileRequest:
    connection_profile: Optional[connectionprofile.ConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionProfile' }})
    connection_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionProfileName' }})
    mysql_rdbms: Optional[mysqlrdbms.MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlRdbms' }})
    oracle_rdbms: Optional[oraclerdbms.OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleRdbms' }})
    recursion_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recursionDepth' }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recursive' }})
    
