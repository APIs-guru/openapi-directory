from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link


@dataclass_json
@dataclass
class Links:
    dropped_links_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droppedLinksCount' }})
    link: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    
