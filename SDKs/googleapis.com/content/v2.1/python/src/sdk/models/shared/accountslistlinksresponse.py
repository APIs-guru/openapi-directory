from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import linkedaccount


@dataclass_json
@dataclass
class AccountsListLinksResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    links: Optional[List[linkedaccount.LinkedAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
