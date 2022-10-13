from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productscustombatchrequestentry


@dataclass_json
@dataclass
class ProductsCustomBatchRequest:
    entries: Optional[List[productscustombatchrequestentry.ProductsCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    
