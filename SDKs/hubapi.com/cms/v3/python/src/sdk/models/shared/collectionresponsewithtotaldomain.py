from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paging
from . import domain


@dataclass_json
@dataclass
class CollectionResponseWithTotalDomain:
    paging: Optional[paging.Paging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paging' }})
    results: List[domain.Domain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
