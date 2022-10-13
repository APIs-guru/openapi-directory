from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mysqlcolumn


@dataclass_json
@dataclass
class MysqlTable:
    mysql_columns: Optional[List[mysqlcolumn.MysqlColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlColumns' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    
