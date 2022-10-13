from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auditableservice


@dataclass_json
@dataclass
class QueryAuditableServicesResponse:
    services: Optional[List[auditableservice.AuditableService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
