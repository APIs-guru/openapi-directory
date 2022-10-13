from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mysqlobjectidentifier
from . import oracleobjectidentifier


@dataclass_json
@dataclass
class SourceObjectIdentifier:
    mysql_identifier: Optional[mysqlobjectidentifier.MysqlObjectIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlIdentifier' }})
    oracle_identifier: Optional[oracleobjectidentifier.OracleObjectIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleIdentifier' }})
    
