from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscoverConnectionProfileResponse:
    r"""DiscoverConnectionProfileResponse
    Response from a discover request.
    """
    
    mysql_rdbms: Optional[MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlRdbms') }})
    oracle_rdbms: Optional[OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleRdbms') }})
    postgresql_rdbms: Optional[PostgresqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlRdbms') }})
    
