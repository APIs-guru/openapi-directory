from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alertpolicy


@dataclass_json
@dataclass
class ListAlertPoliciesResponse:
    alert_policies: Optional[List[alertpolicy.AlertPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertPolicies' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
