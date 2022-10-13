from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authorizeddomain


@dataclass_json
@dataclass
class ListAuthorizedDomainsResponse:
    domains: Optional[List[authorizeddomain.AuthorizedDomain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
