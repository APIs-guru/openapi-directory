from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sasportalassignment


@dataclass_json
@dataclass
class SasPortalPolicy:
    assignments: Optional[List[sasportalassignment.SasPortalAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignments' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    
