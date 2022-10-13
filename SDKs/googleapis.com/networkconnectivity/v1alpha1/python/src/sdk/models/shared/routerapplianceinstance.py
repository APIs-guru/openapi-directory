from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RouterApplianceInstance:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    network_interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterface' }})
    virtual_machine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualMachine' }})
    
