from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import machineconfig


@dataclass_json
@dataclass
class PrimaryInstanceSettings:
    database_flags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseFlags' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    machine_config: Optional[machineconfig.MachineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineConfig' }})
    private_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIp' }})
    
