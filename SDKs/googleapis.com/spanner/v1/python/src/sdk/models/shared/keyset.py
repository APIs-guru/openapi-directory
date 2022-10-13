from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import keyrange


@dataclass_json
@dataclass
class KeySet:
    all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    keys: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    ranges: Optional[List[keyrange.KeyRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranges' }})
    
