from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyRange:
    end_closed: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endClosed' }})
    end_open: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endOpen' }})
    start_closed: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startClosed' }})
    start_open: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startOpen' }})
    
