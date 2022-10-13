from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Link:
    bookmark_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookmarkId' }})
    heading_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headingId' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
