from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartupRemoteAccessDto:
    enable_automatic_port_mapping: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAutomaticPortMapping' }})
    enable_remote_access: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableRemoteAccess' }})
    
