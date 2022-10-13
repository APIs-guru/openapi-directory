from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HealthCheck:
    check_interval_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkIntervalSec' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthyThreshold' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    timeout_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutSec' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthyThreshold' }})
    
