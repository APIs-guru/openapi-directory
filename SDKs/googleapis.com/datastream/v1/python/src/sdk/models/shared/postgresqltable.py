from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import postgresqlcolumn


@dataclass_json
@dataclass
class PostgresqlTable:
    postgresql_columns: Optional[List[postgresqlcolumn.PostgresqlColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postgresqlColumns' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    
