from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productscustombatchresponseentry


@dataclass_json
@dataclass
class ProductsCustomBatchResponse:
    entries: Optional[List[productscustombatchresponseentry.ProductsCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
