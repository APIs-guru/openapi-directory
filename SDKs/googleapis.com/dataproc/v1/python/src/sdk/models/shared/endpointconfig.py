from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EndpointConfig:
    enable_http_port_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableHttpPortAccess' }})
    http_ports: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpPorts' }})
    
