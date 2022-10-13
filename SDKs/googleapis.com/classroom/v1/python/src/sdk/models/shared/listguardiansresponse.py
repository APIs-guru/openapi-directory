from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import guardian


@dataclass_json
@dataclass
class ListGuardiansResponse:
    guardians: Optional[List[guardian.Guardian]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guardians' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
