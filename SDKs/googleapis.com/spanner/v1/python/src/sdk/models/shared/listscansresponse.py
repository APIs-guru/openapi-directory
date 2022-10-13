from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scan


@dataclass_json
@dataclass
class ListScansResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    scans: Optional[List[scan.Scan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scans' }})
    
