from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemarketingListShare:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    remarketing_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remarketingListId' }})
    shared_account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedAccountIds' }})
    shared_advertiser_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedAdvertiserIds' }})
    
