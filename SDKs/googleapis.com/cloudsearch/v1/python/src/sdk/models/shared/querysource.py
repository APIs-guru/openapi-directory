from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryoperator
from . import source


@dataclass_json
@dataclass
class QuerySource:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    operators: Optional[List[queryoperator.QueryOperator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operators' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortName' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
