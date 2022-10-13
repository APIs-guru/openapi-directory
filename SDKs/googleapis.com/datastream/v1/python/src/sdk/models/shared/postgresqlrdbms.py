from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import postgresqlschema


@dataclass_json
@dataclass
class PostgresqlRdbms:
    postgresql_schemas: Optional[List[postgresqlschema.PostgresqlSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postgresqlSchemas' }})
    
