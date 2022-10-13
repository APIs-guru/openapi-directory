from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paging
from . import externalunifiedevent


@dataclass_json
@dataclass
class CollectionResponseExternalUnifiedEvent:
    paging: Optional[paging.Paging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paging' }})
    results: List[externalunifiedevent.ExternalUnifiedEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
