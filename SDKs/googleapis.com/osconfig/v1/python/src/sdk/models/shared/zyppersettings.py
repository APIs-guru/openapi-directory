from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ZypperSettings:
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    exclusive_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusivePatches' }})
    severities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severities' }})
    with_optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withOptional' }})
    with_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withUpdate' }})
    
