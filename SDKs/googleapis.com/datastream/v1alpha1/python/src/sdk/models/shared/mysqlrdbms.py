from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mysqldatabase


@dataclass_json
@dataclass
class MysqlRdbms:
    mysql_databases: Optional[List[mysqldatabase.MysqlDatabase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlDatabases' }})
    
