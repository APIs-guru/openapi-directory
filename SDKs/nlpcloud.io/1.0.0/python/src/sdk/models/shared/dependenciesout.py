from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import arc
from . import word


@dataclass_json
@dataclass
class DependenciesOut:
    arcs: List[arc.Arc] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arcs' }})
    words: List[word.Word] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'words' }})
    
