from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productstatusescustombatchresponseentry


@dataclass_json
@dataclass
class ProductstatusesCustomBatchResponse:
    entries: Optional[List[productstatusescustombatchresponseentry.ProductstatusesCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
