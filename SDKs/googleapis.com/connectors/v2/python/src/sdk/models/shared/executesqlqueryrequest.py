from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import query


@dataclass_json
@dataclass
class ExecuteSQLQueryRequest:
    query: Optional[query.Query] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
