from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sitetype


@dataclass_json
@dataclass
class SiteTypeResponse:
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_count' }})
    sitetypes: Optional[List[sitetype.SiteType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sitetypes' }})
    
