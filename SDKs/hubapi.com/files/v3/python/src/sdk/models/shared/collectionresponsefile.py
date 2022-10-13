from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paging
from . import file


@dataclass_json
@dataclass
class CollectionResponseFile:
    paging: Optional[paging.Paging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paging' }})
    results: List[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
