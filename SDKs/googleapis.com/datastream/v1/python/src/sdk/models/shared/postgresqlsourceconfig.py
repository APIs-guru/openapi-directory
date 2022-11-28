from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostgresqlSourceConfig:
    r"""PostgresqlSourceConfig
    PostgreSQL data source configuration
    """
    
    exclude_objects: Optional[PostgresqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeObjects') }})
    include_objects: Optional[PostgresqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeObjects') }})
    publication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publication') }})
    replication_slot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationSlot') }})
    
