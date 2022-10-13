from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import richresultsissue


@dataclass_json
@dataclass
class Item:
    issues: Optional[List[richresultsissue.RichResultsIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
