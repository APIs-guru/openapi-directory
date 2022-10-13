from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import suggestresult


@dataclass_json
@dataclass
class SuggestResponse:
    suggest_results: Optional[List[suggestresult.SuggestResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestResults' }})
    
