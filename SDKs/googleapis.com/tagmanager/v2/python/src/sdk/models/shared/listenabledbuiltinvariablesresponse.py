from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import builtinvariable


@dataclass_json
@dataclass
class ListEnabledBuiltInVariablesResponse:
    built_in_variable: Optional[List[builtinvariable.BuiltInVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtInVariable' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
