from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iampolicysearchresult


@dataclass_json
@dataclass
class SearchAllIamPoliciesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    results: Optional[List[iampolicysearchresult.IamPolicySearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
