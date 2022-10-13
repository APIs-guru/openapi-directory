from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class YumSettings:
    excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    exclusive_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusivePackages' }})
    minimal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimal' }})
    security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'security' }})
    
