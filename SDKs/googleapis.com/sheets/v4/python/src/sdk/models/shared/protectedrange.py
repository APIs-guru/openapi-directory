from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import editors
from . import gridrange
from . import gridrange


@dataclass_json
@dataclass
class ProtectedRange:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    editors: Optional[editors.Editors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editors' }})
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedRangeId' }})
    protected_range_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectedRangeId' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    requesting_user_can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestingUserCanEdit' }})
    unprotected_ranges: Optional[List[gridrange.GridRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unprotectedRanges' }})
    warning_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warningOnly' }})
    
