from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import volume


@dataclass_json
@dataclass
class Seriesmembership:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    member: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
