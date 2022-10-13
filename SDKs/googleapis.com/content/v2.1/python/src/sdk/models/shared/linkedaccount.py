from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import linkservice


@dataclass_json
@dataclass
class LinkedAccount:
    linked_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedAccountId' }})
    services: Optional[List[linkservice.LinkService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
