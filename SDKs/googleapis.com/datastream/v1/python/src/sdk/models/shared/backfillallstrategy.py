from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackfillAllStrategy:
    r"""BackfillAllStrategy
    Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
    """
    
    mysql_excluded_objects: Optional[MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlExcludedObjects') }})
    oracle_excluded_objects: Optional[OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleExcludedObjects') }})
    postgresql_excluded_objects: Optional[PostgresqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlExcludedObjects') }})
    
