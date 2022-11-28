from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostgresqlTable:
    r"""PostgresqlTable
    PostgreSQL table.
    """
    
    postgresql_columns: Optional[List[PostgresqlColumn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlColumns') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
