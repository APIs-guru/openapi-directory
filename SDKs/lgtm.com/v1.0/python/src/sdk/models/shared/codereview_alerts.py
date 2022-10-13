from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import query


@dataclass_json
@dataclass
class CodereviewAlerts:
    fixed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed' }})
    new: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new' }})
    query: Optional[query.Query] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
