from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import forwardpaging
from . import actionrevision


@dataclass_json
@dataclass
class CollectionResponseActionRevisionForwardPaging:
    paging: Optional[forwardpaging.ForwardPaging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paging' }})
    results: List[actionrevision.ActionRevision] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
