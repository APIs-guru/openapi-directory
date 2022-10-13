from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mysqlrdbms
from . import oraclerdbms


@dataclass_json
@dataclass
class DiscoverConnectionProfileResponse:
    mysql_rdbms: Optional[mysqlrdbms.MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlRdbms' }})
    oracle_rdbms: Optional[oraclerdbms.OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleRdbms' }})
    
