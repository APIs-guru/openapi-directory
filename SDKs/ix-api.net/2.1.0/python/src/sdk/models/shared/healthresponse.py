from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class HealthResponseStatusEnum(str, Enum):
    PASS = "pass"
    FAIL = "fail"
    WARN = "warn"


@dataclass_json
@dataclass
class HealthResponse:
    checks: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checks' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    links: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    release_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseId' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    status: HealthResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
