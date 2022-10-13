from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountsCustomBatchRequestEntryLinkRequest:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    link_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkType' }})
    linked_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedAccountId' }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
