from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OsPolicyOsFilter:
    os_short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osShortName' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    
