from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InventoryOsInfo:
    architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    kernel_release: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernelRelease' }})
    kernel_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernelVersion' }})
    long_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longName' }})
    osconfig_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osconfigAgentVersion' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortName' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
