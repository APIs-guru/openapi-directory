from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import operatingsystem


@dataclass_json
@dataclass
class OperatingSystemVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    major_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorVersion' }})
    minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minorVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operating_system: Optional[operatingsystem.OperatingSystem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystem' }})
    
