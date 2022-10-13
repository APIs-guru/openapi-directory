from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mysqlrdbms
from . import oraclerdbms


@dataclass_json
@dataclass
class BackfillAllStrategy:
    mysql_excluded_objects: Optional[mysqlrdbms.MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlExcludedObjects' }})
    oracle_excluded_objects: Optional[oraclerdbms.OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleExcludedObjects' }})
    
