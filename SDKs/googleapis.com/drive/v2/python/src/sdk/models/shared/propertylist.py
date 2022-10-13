from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import property


@dataclass_json
@dataclass
class PropertyList:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[property.Property]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
