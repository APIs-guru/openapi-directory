from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostgresqlRdbms:
    r"""PostgresqlRdbms
    PostgreSQL database structure.
    """
    
    postgresql_schemas: Optional[List[PostgresqlSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlSchemas') }})
    
