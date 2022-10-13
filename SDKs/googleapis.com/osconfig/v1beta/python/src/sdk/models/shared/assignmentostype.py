from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssignmentOsType:
    os_architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osArchitecture' }})
    os_short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osShortName' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    
