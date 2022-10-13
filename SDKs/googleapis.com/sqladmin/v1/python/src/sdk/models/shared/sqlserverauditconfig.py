from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SQLServerAuditConfig:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    retention_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionInterval' }})
    upload_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadInterval' }})
    
