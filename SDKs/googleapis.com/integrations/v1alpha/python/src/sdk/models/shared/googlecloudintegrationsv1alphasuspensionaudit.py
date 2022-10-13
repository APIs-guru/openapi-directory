from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionAudit:
    resolve_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolveTime' }})
    resolver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolver' }})
    
