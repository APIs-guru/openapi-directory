from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pingconfig


@dataclass_json
@dataclass
class TCPCheck:
    ping_config: Optional[pingconfig.PingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pingConfig' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    
