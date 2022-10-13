from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Webfont:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    files: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified' }})
    subsets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsets' }})
    variants: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
