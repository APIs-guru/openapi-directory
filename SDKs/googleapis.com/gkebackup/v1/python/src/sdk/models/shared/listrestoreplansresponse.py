from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import restoreplan


@dataclass_json
@dataclass
class ListRestorePlansResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    restore_plans: Optional[List[restoreplan.RestorePlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restorePlans' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
