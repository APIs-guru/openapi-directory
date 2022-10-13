from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import variable


@dataclass_json
@dataclass
class ListVariablesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    variable: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variable' }})
    
