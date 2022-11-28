from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SQLServerAuditConfig:
    r"""SQLServerAuditConfig
    SQL Server specific audit configuration.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    retention_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionInterval') }})
    upload_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadInterval') }})
    
