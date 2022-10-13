from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import case


@dataclass_json
@dataclass
class ListCasesResponse:
    cases: Optional[List[case.Case]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cases' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
