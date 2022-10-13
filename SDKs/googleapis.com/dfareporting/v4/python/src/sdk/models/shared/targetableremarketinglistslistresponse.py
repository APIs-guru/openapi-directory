from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetableremarketinglist


@dataclass_json
@dataclass
class TargetableRemarketingListsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    targetable_remarketing_lists: Optional[List[targetableremarketinglist.TargetableRemarketingList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetableRemarketingLists' }})
    
