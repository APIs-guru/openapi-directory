from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PrefixNode:
    data_source_node: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceNode' }})
    depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depth' }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIndex' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    word: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'word' }})
    
