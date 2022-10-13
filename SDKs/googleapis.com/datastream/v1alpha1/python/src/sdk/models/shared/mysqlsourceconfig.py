from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mysqlrdbms
from . import mysqlrdbms


@dataclass_json
@dataclass
class MysqlSourceConfig:
    allowlist: Optional[mysqlrdbms.MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowlist' }})
    rejectlist: Optional[mysqlrdbms.MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectlist' }})
    
