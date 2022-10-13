from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licensee


@dataclass_json
@dataclass
class LicenseeListResult:
    has_more: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasMore' }})
    licensees: Optional[List[licensee.Licensee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensees' }})
    
