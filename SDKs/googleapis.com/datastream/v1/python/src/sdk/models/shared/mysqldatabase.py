from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mysqltable


@dataclass_json
@dataclass
class MysqlDatabase:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    mysql_tables: Optional[List[mysqltable.MysqlTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlTables' }})
    
