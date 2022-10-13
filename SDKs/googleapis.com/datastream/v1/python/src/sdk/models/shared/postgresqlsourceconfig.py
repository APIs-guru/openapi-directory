from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import postgresqlrdbms
from . import postgresqlrdbms


@dataclass_json
@dataclass
class PostgresqlSourceConfig:
    exclude_objects: Optional[postgresqlrdbms.PostgresqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeObjects' }})
    include_objects: Optional[postgresqlrdbms.PostgresqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeObjects' }})
    publication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publication' }})
    replication_slot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationSlot' }})
    
